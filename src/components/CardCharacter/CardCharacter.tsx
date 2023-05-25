import React from "react";
import styles from './CardCharacter.module.css'
import { Character } from "../../Interfaces";


const CardCharacter: React.FC<Character> = ({ image, name, species, status, gender }) => {

    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <div className="card__info">
                <h2>{name}</h2>
                <p>{species}</p>
                <p>{status}</p>
                <p>{gender}</p>
            </div>
        </div>
    )
}

export default CardCharacter