import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      id
      name
      class
      endurance
      strength
      intelligence
      agility
      specialAbility
    }
  }
`;
