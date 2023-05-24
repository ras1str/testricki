import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios';
import { Character } from '../Interfaces';
  

const OneCharacter = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState<Character>();

    const fetchData = async()=>{
        let url : string= 'https://rickandmortyapi.com/api/character/'
        url += id
        const response = await axios.get(url)
        setCharacter(response.data)
        
        
     }


     useEffect( () => {
       fetchData()


    }, [])

   

    return (
        <div>
        {character && (
            <>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
            </>
        )}
    </div>
    )
}


export default OneCharacter