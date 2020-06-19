import { gql } from 'apollo-boost';

const getBoats = () => {
  return gql`
    query getBoats ($input: GetBoatInput!) {
      getBoats (input: $input) {
        id
        name
        type
        year
        reviews {
          total
          score
        }
        marina
        locality
        country
        skipper
        active
        cabins
        guests
        length
        price
        imageUrl
      }
    }`
}

export {
  getBoats
};
