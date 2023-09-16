import * as React from 'react'

import { User } from '../interfaces'
import styles from '@/styles/Home.module.css'
import Character from '@/interfaces/character'

type ListDetailProps = {
  character: Character
}

const ListDetail = ({ character }: ListDetailProps) => (
  <div className={styles.characterDetailContainer}>
      <div className={styles.characterImageContainer}>
        <img src={character.image} alt={character.name} className={styles.characterImage} />
      </div>
      <div className={styles.characterInfoContainer}>
        <h1 className={styles.characterName}>{character.name}</h1>
        <div className={styles.characterAttributes}>
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Location:</strong> {character.location.name}
          </p>
          <p>
            <strong>Episodes:</strong> {character.episode.length}
          </p>
        </div>
      </div>
    </div>
)

export default ListDetail
