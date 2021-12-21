import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import styles from './UserDetailPage.module.scss';

export default function UserDetailPage () {
  const params = useParams();
  const userId = params.userId as string;

  const { isLoading, error, data: user } = useUser(userId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
        <div>
            <h2> {user.realName}</h2>
            <h3>Teams</h3>
            {user.teams.length
              ? <ul className={styles.listTeams}>
                   {user.teams.map((team: any) => <li key={team.id}>- {team.name}</li>)}
                </ul>
              : <div>User has not teams</div>
            }
        </div>
  );
}
