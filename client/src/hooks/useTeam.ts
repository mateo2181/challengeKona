import { useQuery } from 'react-query';
import { Team as ITeam } from '../types';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

const useTeam = (teamId: string) => useQuery<ITeam, Error>(['team', teamId], () => {
  return fetch(`${API_ENDPOINT}/teams/${teamId}`)
    .then((res) => res.json())
    .then(res => res.data);
});

export default useTeam;
