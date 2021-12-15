import React, { useCallback, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { Team as ITeam } from '../../types';
import styles from './Team.module.scss';

interface PropsTeam {
    team: ITeam | undefined;
}

function Team ({ team }: PropsTeam) {
  const queryClient = useQueryClient();
  const teams = queryClient.getQueryData<ITeam[]>('teams');

  useEffect(() => {
    // console.log(team);
  }, [team]);

  const getTeam = useCallback((teamId: string) => {
    return teams?.find(team => team.id === teamId);
  },
  [teams]);

  if (!team) return <></>;

  if (team.settings.consolidatedTeams?.length) {
    return (
            <>
                <li className={styles.team}> <Link to={`/teams/${team.id}`}> {team.name} </Link></li>
                <ul>
                    {team.settings.consolidatedTeams.map((teamId: string) => (<Team key={teamId} team={getTeam(teamId)} />))}
                </ul>
            </>
    );
  } else {
    return (
            <li className={styles.team}>
                <Link to={`/teams/${team.id}`}>{team.name}</Link>
            </li>
    );
  }
}

export default React.memo(Team);