import { useEffect, useState } from "react"
import { instance } from "../utils"

const useAxios = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleFetchData = async () => {
        try {
            const { data } = await instance.get(url)
            setData(data)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleFetchData()
    }, [])
    return {
        data,
        loading,
        error,
    }
}

export default useAxios
