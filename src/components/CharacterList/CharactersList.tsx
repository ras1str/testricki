import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import Card from '../CardCharacter/CardCharacter';
import styles from "./CharacterList.module.css"
import { Loader } from '../UI/Loader';
import FilterCharacter from '../Filter/FilterCharacter';
import { Character } from '../../Interfaces';

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);//массив объектов персонажей
  const [pages, setPages] = useState(0)// сколько всего страниц
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [error, setError] = useState('')

  const updatePosts = (value: Character[], pages: number) => {
    setCharacters(value)
    setPages(pages)
  }

  const updateLoading = (value:boolean) => {

    setIsDataLoading(value)

  }

  const updateError = (value:string) => {
    setError(value)
  }

  return (

    <>
      <FilterCharacter updatePosts={updatePosts} updateLoading={updateLoading} updateError={updateError} />
      
      {error && <h1>{error}</h1>}
      {
        isDataLoading
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
