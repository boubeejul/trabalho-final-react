import axios from "axios";

export const api = axios.create ({
    baseURL: "https://trabalho-api-production.up.railway.app/api"
})

export const produtos = axios.create ({
    baseURL: "https://trabalho-api-production.up.railway.app/api/produtos"
})

export const categorias = axios.create ({
    baseURL: "https://trabalho-api-production.up.railway.app/api/categorias"
})

export const clientes = axios.create ({
    baseURL: "https://trabalho-api-production.up.railway.app/api/clientes"
})

export const pedidosApi = axios.create ({
    baseURL: "https://trabalho-api-production.up.railway.app/api/pedidos"
})

export const apiAuth = axios.create ({
    baseURL: "https://trabalho-api-production.up.railway.app/api/auth"
})
