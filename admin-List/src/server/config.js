import axios from "axios"

const api = axios.create ({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const userService = {
    getUsers: async() => {
        const { data } = await api.get("/users")
        return data
    },

    createUser: async(body) => {
        const { status } = await api.post("/users",body)
        return status
    },

    deleteUser: async(id) => {
        const { status } = await api.delete(`/users/${id}`)
        return status
    },
}

export { userService }