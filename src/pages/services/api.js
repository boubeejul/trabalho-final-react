import axios from "axios";

export const apiCards = axios.create ({
    baseUrl: "https://trabalho-api-production.up.railway.app"
})