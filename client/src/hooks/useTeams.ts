import { useQuery } from 'react-query';
import { Team as ITeam } from '../types';
import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

const useTeams = () => useQuery<ITeam[], Error>('teams', () => {
  return axios.get(`${API_ENDPOINT}/teams`, { headers: { Authorization: 'mateoasdkoasdkoasd' } }).then(res => res.data.data as ITeam[]);
});

export default useTeams;
