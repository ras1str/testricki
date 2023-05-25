import React, { useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'
import Card from '../CardCharacter/CardCharacter';
import styles from "./CharacterList.module.css"
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../service/PostService';
import { Loader } from '../UI/Loader';
import FilterCharacter from '../Filter/FilterCharacter';
import { Character } from '../../Interfaces';

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);//массив объектов персонажей
  const [itPage, setItPage] = useState(1)//Текущая страница 
  const [pages, setPages] = useState(0)// сколько всего страниц
  
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    // Запрос на сервер для получения объектов по страницам
    const response = await PostService.getAll(itPage)
    setCharacters(response.data.results)
    setPages(response.data.info.pages)
    }
  )

  const updatePosts = (value:any) => {
    setCharacters(value.results)
    setPages(value.info.pages)
  }

  useEffect(() => {
    fetchPosts()
  }, [itPage])


  return (

    <>
      <FilterCharacter updatePosts={updatePosts}/>
      
      {postError && <h1>{postError}</h1>}
      {
        isPostLoading
          ? <div className={styles.loader}><Loader /></div>
          : <div className={styles.list}>

            {characters.map(character => (
              <>
             <Card

                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
                status={character.status}
                gender={character.gender}
              />
              <NavLink to={`${character.id}`} >Полная информация</NavLink>
              </>

            ))}
          </div>
      }
    </>
  );
};

export default CharactersList;
