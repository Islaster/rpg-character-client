// src/components/CharacterList.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

const CharacterList = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Character List</h2>
            <ul>
                {data.characters.map((character) => (
                    <li key={character.id}>
                        <strong>{character.name}</strong> - {character.class}
                        <ul>
                            <li>Endurance: {character.endurance}</li>
                            <li>Strength: {character.strength}</li>
                            <li>Intelligence: {character.intelligence}</li>
                            <li>Agility: {character.agility}</li>
                            <li>Special Ability: {character.specialAbility}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
