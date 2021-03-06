////////////////////////////////////////////////////////////////////
/////////////////////////// A U T H ////////////////////////////////
////////////////////////////////////////////////////////////////////

import axios from "axios"
const host = "https://recoverlyironhack.herokuapp.com/auth"

export const signup = (user) => {
  return axios.post(host + "/signup", user, {})
    .then(response => response.data)
    .catch(err => err.response)
}

export const login = (user) => {
  return axios.post(host + "/login", user, {})
    .then(response => response.data)
    .catch(err => err.response)
}

export const logout = () => {
  return axios.get(host + "/logout")
    .then(response => response.data)
    .catch(err => err.response)
}