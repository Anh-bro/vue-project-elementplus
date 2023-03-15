import http from '../utils/request'

export const getData = () => {
    return http.get('/home/getData')
}

export const login = (data) => {
    return http.post("/login", data)
}

export const addMark = (data) => {
    return http.post("/addmark", data)
}

export const reduceMark = (data) => {
    return http.post("/reducemark", data)
}

export const  getMark = (data) => {
    return http.get("/getmark")
}