import axios from "axios";

const apiCrypto = axios.create({
    baseURL: 'https://crypto-api-production-cf04.up.railway.app/api/v1/crypto',
    timeout: 10000
})

export const encryptRequest = async(text) => {
    try {
        let result = await apiCrypto.post('/encrypt', text)
        return result
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const decryptRequest = async(text) => {
    try {
        let result = await apiCrypto.post('/decrypt', text)
        return result
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}