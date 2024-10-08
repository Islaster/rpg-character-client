import { gql } from '@apollo/client';

export const CREATE_CHARACTER = gql`
  mutation CreateCharacter($name: String!) {
    createCharacter(name: $name) {
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
