import { useState } from "react"


export const useFetching = (callback:() => Promise<void>) => {

    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState('')

    const fetching = async() => {
        try {
                
            setIsLoading(true)
            await callback() 

        }catch (error:any){

            setError(error.message)

        }finally{
        
            setIsLoading(false)
        
        }


    }

    return [fetching, isLoading, error] as const

}