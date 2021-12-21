import { useQuery } from 'react-query';
// import { Team as ITeam } from '../types';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

const useUser = (userId: string) => useQuery<any, Error>(['user', userId], () => {
  return fetch(`${API_ENDPOINT}/users/${userId}`)
    .then((res) => res.json())
    .then(res => res.data);
});

export default useUser;
