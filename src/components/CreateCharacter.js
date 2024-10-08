// src/components/CreateCharacter.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CHARACTER } from '../graphql/mutations';
import { GET_CHARACTERS } from '../graphql/queries';

const CreateCharacter = () => {
    const [name, setName] = useState('');
    const [createCharacter, { loading, error }] = useMutation(CREATE_CHARACTER, {
        refetchQueries: [{ query: GET_CHARACTERS }],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '') return;
        createCharacter({ variables: { name } });
        setName('');
    };

    if (loading) return <p>Creating character...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Create New Character</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Character Name"
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCharacter;
