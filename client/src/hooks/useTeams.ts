import { useQuery } from 'react-query';
import { Team as ITeam } from '../types';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

const useTeams = () => useQuery<ITeam[], Error>('teams', () => {
  return fetch(`${API_ENDPOINT}/teams`)
    .then((res) => res.json())
    .then(res => res.data);
});

export default useTeams;
