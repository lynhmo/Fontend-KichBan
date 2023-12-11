import axios from 'axios'

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_URL}/user/sign-in`, data)
    return res.data
}

export const signupUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_URL}/user/sign-up`, data)
    return res.data
}

export const getDetailUser = async (id, access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_URL}/user/get-detail/${id}`, {
        headers: {
            token: `BbbbGet ${access_token}`
        }
    })
    return res.data
}

export const refreshToken = async () => {
    const res = await axios.post(`${process.env.REACT_APP_URL}/user/refresh-token`, {
        withCredentials: true
    })
    return res.data
}
// export const refreshToken = async (refreshToken) => {
//     console.log('refreshToken', refreshToken)
//     const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {} , {
//         headers: {
//             token: `Bearer ${refreshToken}`,
//         }
//     })
//     return res.data
// }


export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_URL}/user/log-out`)
    return res.data
}

export const updateUser = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_URL}/user/update-user/${id}`, data, {
        headers: {
            token: `BbbbGet ${access_token}`
        }
    })
    return res.data
}


export const getallUser = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_URL}/user/getall`, {
        headers: {
            token: `BbbbGet ${access_token}`
        }
    })
    return res.data
}
export const deleteUser = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_URL}/user/delete-user/${id}`, {
        headers: {
            token: `BbbbGet ${access_token}`
        }
    })
    return res.data
}