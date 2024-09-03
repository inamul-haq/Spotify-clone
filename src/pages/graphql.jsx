import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query songs{
    songs{
    id
    artist
    url
    accent
    name
    top_track
    cover{
        id
    }
    }
}
`;
