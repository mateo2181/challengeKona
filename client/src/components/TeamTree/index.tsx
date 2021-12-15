import React, { useEffect, useState } from 'react';
import useTeams from '../../hooks/useTeams';
import { Team as ITeam } from '../../types';
import Team from '../Team';
import styles from './TeamTree.module.scss';

export default function TeamTree () {
  const [primaryTeams, setPrimaryTeams] = useState<ITeam[]>([]);
  // const queryClient = useQueryClient();
  // const teams = queryClient.getQueryData<ITeam[]>('teams');
  const { isLoading, data: teams, error } = useTeams();

  useEffect(() => {
    console.log(teams);
    if (teams) {
      setPrimaryTeams(teams.filter((team: ITeam) => team.settings.channel_id));
    }
  }, [teams]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
          <ul className={styles.list}>
              { primaryTeams.length && primaryTeams.map((team: any) => <Team key={team.id} team={team} />)}
          </ul>
  );
}
