import React from "react";
import axios from "axios";
import {hashingPassword} from "../state/hash";
import useStore from "../state/store";

export const registration = (username, password, setMessage, navigate) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/checkUser',
        params: {
            username: username
        }
    }).then((response) => {
        if (response.data === true) {
            setMessage('Пользователь с таким именем уже есть')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:8080/generateTokenAndSalt',
                params: {
                    username: username
                }
            }).then((response) => {
                let salt = response.data.salt
                let token = response.data.token
                axios({
                    method: 'put',
                    url: 'http://localhost:8080/password',
                    params: {
                        token: token,
                        password: hashingPassword(password, salt)
                    }
                }).then((response) => {
                    authorisation(username, password, setMessage, navigate)
                }).catch((exception) => {
                    setMessage('пароль не был добавлен на сервер. Сбой в регистрации')
                })
            }).catch((exception) => {
                setMessage('соль не была сгенерирована на сервере. Сбой в регистрации')
                //доделать update tokens необходимо удалять из базы пользователей, у которых не стоит пароля для повторной попытки их добавления
            });
        }
    })
}
export const authorisation = (username, password, setMessage, navigate, tokens) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/checkUser',
        params: {
            username: username
        }
    }).then((response) => {
        if (response.data === false) {
            setMessage('Пользователя с таким именем нет')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:8080/getTokenAndSalt',
                params: {
                    username: username
                }
            }).then((response) => {
                let salt = response.data.salt
                let token = response.data.token
                axios({
                    method: 'post',
                    url: 'http://localhost:8080/password',
                    params: {
                        token: token,
                        password: hashingPassword(password, salt)
                    }
                }).then((response) => {
                    tokens.accessToken = response.data.accessToken
                    tokens.refreshToken = response.data.refreshToken
                    console.log(response)
                    navigate("/main")
                }).catch((exception) => {
                    setMessage('пароль не был сравнен на сервер. Сбой в авторизации')
                })
            }).catch((exception) => {
                setMessage('соль не была получена от сервера. Сбой в авторизации')
                //доделать update tokens необходимо удалять из базы пользователей, у которых не стоит пароля для повторной попытки их добавления
            });
        }
    })
}

export const addDot = (dot, setMessage, tokens) => {
    axios({
        method: 'put',
        url: 'http://localhost:8080/addDot',
        params: {
            token: tokens.accessToken,
            x: dot.x,
            y: dot.y
        }
    }).then(
        setMessage('Точка успешно добавлена')
    ).catch(() => {
            setMessage('Проблемы с добавлением точки')
            updateTokens(tokens, () => {
                addDot(dot, tokens, setMessage)
            })
        }
    )
}

export const getMyDots = (dots, tokens) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/getMyDots',
        params: {
            accessToken: tokens.accessToken,
        }
    }).then((response) => {
            // console.log(response.data)
            dots = response.data
            console.log(dots[0].x)
        }
    ).catch(() => {
            console.log("проблема при взятии точек")
            updateTokens(tokens, () => {
                getMyDots(tokens, dots)
            })
        }
    )
}

export const updateTokens = (callBack, tokens) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/checkToken',
        params: {
            token: tokens.accessToken,
        }
    }).then((response) => {
            if (response.data === true) {
                console.log('проверил access, он валиден. Ошибка не в токенах')
            } else {
                console.log('будем обновлято токены')
                axios({
                    method: 'post',
                    url: 'http://localhost:8080/updateTokens',
                    params: {
                        refreshToken: tokens.refreshToken,
                    }
                }).then((response) => {
                    if (response.data === "") {
                        //выкидывать на экрын логирования
                        console.log('выкидывать на экрын логирования')
                    } else {
                        console.log('токены обновлены')
                        tokens.accessToken = response.data.accessToken
                        tokens.refreshToken = response.data.refreshToken
                        callBack()
                    }
                })
            }
        }
    ).catch(() => {
        console.log('ошибка при проверке access')
    })
}

export const signByVk =(setTokens, setAuthorized) => {
    window.VK.Auth.login((user) => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/signByVk',
            params: {
                mid: user.session.mid,
                parameters: `expire=${user.session.expire}mid=${user.session.mid}secret=${user.session.secret}sid=${user.session.sid}`,
                sig: user.session.sig
            }
        }).then((response)=>{
            setTokens(response.data.accessToken, response.data.refreshToken)
            setAuthorized(true)
        })
    })
}

export const singByGoogle = (setTokens, setAuthorized, navigate) => {
    const googleAuth = window.gapi.auth2.getAuthInstance()
    googleAuth.signIn(
        {
            scope: 'profile email'
        }
    ).then((user) => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/signByGoogle',
            params: {
                idTokenString: user.wc.id_token
            }
        }).then((response)=>{
            setTokens(response.data.accessToken, response.data.refreshToken)
            setAuthorized(true)
            navigate("/main")
        })
    })
}