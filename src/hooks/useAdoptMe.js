import { useEffect } from "react"
import { useState } from "react"

const useAdoptMe = (input) =>{
    const [animal,setAnimal] = useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState()

    useEffect(()=>{
        const fetchAnimal = async ()=>{
            try{
                setLoading(true)
    
                const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${input}`)
                const data = await response.json()
    
                setAnimal(data)

            } catch (error){
                console.error(error)
                setError('The Animal is not found!!!')
            } finally {
                setLoading(false)
            }


        }

        fetchAnimal()
    },[animal])

    return {
        loading,
        error,
        animal
    }
}

export default useAdoptMe

