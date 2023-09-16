import React from 'react';
import Character from '../interfaces/character';
import styles from '@/styles/Home.module.css'

type Prop = { character: Character };
const CharacterListItem = ({ character }: Prop) => {
  const { name, status, image } = character;

  return (
    <a href={`/characters/${character.id}`}>
    <div className={`${styles['custom-card']} ${styles['mb-3']}`}>
      <div className={`${styles['custom-row']} ${styles['g-0']}`}>
        <div className={`${styles['custom-col-md-4']}`}>
          <img src={image} alt={name} className={styles['circular-small-image']} />
        </div>
        <div className={`${styles['custom-col-md-8']}`}>
          <div className={styles['custom-card-body']}>
            <h5 className={styles['custom-card-title']}>{name}</h5>
            <p className={`${styles['custom-card-text']} ${styles[`custom-text-${status === 'Alive' ? 'success' : 'danger'}`]}`}>
              Status: {status}
            </p>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
};

export default CharacterListItem;