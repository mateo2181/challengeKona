import React from 'react';
import { Outlet } from 'react-router-dom';
import TeamTree from '../../components/TeamTree';
import styles from './TeamPage.module.scss';

export default function TeamsPage () {
  return (
    <div className={styles.container}>
          <div className={styles.sidebar}>
              <h1>Teams</h1>
              <TeamTree />
          </div>
          <div className={styles.detail}>
            <Outlet />
          </div>
        </div>
  );
}
