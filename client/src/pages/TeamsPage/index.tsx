import React from 'react';
import { Outlet } from 'react-router-dom';
import TeamTree from '../../components/TeamTree';
import useTeams from '../../hooks/useTeams';
import styles from './TeamPage.module.scss';

export default function TeamsPage () {
  // const { isLoading, error } = useTeams();

  // if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className={styles.container}>
          <div className={styles.sidebar}>
              <h1>Teams</h1>
              <TeamTree />
              {/* { isLoading ? <div>Loading...</div> : <TeamTree /> } */}
          </div>
          <div className={styles.detail}>
            <Outlet />
          </div>
        </div>
  );
}
