import React, { useEffect, useState } from 'react';
import { DataProp, fetchAllData } from '../utils/api'; // Import the function you created to fetch data
import styles from '@/styles/Home.module.css'
import Character, { Origin } from '@/interfaces/character';

function CharacterStatistics() {
  const [data, setData] = useState<DataProp>(null);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const fetchedData = await fetchAllData();
        setData(fetchedData);
      } catch (error) {
        // Handle errors
      }
    }

    fetchDataAsync();
  }, []);

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="character-statistics">
      <div className={`${styles.center}`} >
            <h1>Character Statistics</h1>
      </div>

      <div className={styles.grid}>
        <section className={`top-character ${styles.card}`}>
          <h2>Top 3 Characters</h2>
          <ul>
            {data.topCharacters.map((character) => (
              <li key={character.id}>{character.name} - {character.episode.length} episodes</li>
            ))}
          </ul>
        </section>

        <section className={`${styles.card} most-status`}>
          <h2>Most Assigned Status</h2>
          <ul>
            <li >{data.mostStatus?.mostStatus} - ({data.mostStatus?.maxCount})</li>
          </ul>
        </section>

        <section className={`most-status ${styles.card}`}>
          <h2>Most Assigned Location</h2>
          <ul>
            <li >{data.mostLocation?.mostLocation} - ({data.mostLocation?.maxCount})</li>
          </ul>
        </section>

        <section className={`most-species ${styles.card}`}>
          <h2>Species with Most Males</h2>
          <li >{data.mostSpecies?.mostspecies} - ({data.mostSpecies?.maxCount})</li>
        </section>


      </div>
      <div className={`${styles.center}`}>
      <section className={`unique-origins`}>
        <h2>Unique Origins ({data.originData.totalUniqueOrigins})</h2>
        <ul>
          {data.originData.uniqueOriginsArray.map((origin) => {
            return (

              <li key={origin.name}>
                <strong>{origin.name}</strong>
                <ul>
                  {Array.isArray(origin.speciesData) && origin.speciesData.map((species) => (
                    <li key={species.speciesName}>
                      {species.speciesName} - {species.characterCount} characters
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </section>
      </div>
    </div>
  );
}

export default CharacterStatistics;