import React, { useCallback, useState } from 'react';
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

  const [showChildren, setShowChildren] = useState<boolean>(true);

  const getTeam = useCallback((teamId: string) => {
    return teams?.find(team => team.id === teamId);
  },
  [teams]);

  if (!team) return <></>;

  if (team.settings.consolidatedTeams?.length) {
    return (
            <>
                <li className={styles.team}>
                  <span onClick={() => setShowChildren(prev => !prev)} className={`${showChildren ? styles.arrowDown : styles.arrowRight}`}></span>
                  <Link to={`/teams/${team.id}`}> {team.name} </Link>
                </li>
                { showChildren &&
                  <ul>
                      {team.settings.consolidatedTeams.map((teamId: string) => (<Team key={teamId} team={getTeam(teamId)} />))}
                  </ul>
                }
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
