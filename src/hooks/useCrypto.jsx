import React, { useState } from 'react'
import { encryptRequest, decryptRequest } from '../service/api'

export const useCrypto = () => {
    const [isLoading, setLoading] = useState(false)

    const crypto = async (text) => {
        setLoading(true)
        const encriptation = { text }

        const response = await encryptRequest(encriptation)
        setLoading(false)

        if (response.error) {
            console.log('Error al encriptar', response.err)
            return null
        }
        return response.data
    }

    const decrypt = async (text) => {
        setLoading(true)
        const decriptation = { text }

        const response = await decryptRequest(decriptation)
        setLoading(false)

        if (response.error) {
            console.log('Error al desencriptar', response.err)
            return null
        }
        return response.data
    }

    return {
        crypto,
        decrypt,
        isLoading
    }
}
