import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Character } from '../Interfaces';
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../components/UI/Loader';
import styles from './CharacterList.module.css'



const OneCharacter = () => {

    const { id } = useParams()
    const [character, setCharacter] = useState<Character>();



    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        // Запрос на сервер для получения объекта 

        let url: string = 'https://rickandmortyapi.com/api/character/'
        url += id
        const response = await axios.get(url)
        setCharacter(response.data)
    }
    )



    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {dataError && <h1>{dataError}</h1>}
            {
                isDataLoading
                    ? <div className={styles.loader}><Loader /></div>
                    : <div>


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
            }
        </div>
    )
}


export default OneCharacter