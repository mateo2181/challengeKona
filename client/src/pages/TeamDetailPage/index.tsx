import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useTeam from '../../hooks/useTeam';
import styles from './TeamDetailPage.module.scss';

export default function TeamDetailPage () {
  const params = useParams();
  const teamId = params.teamId as string;

  const { isLoading, error, data: team } = useTeam(teamId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  if (!team) return <div>Team not found</div>;

  return (
        <section className={styles.container}>
          <h1>Detail Team: {team.name}</h1>
          <div className={styles.manager}>
            <h2>MANAGER</h2>
            <div><Link to={`/teams/user/${team.manager?.id}`}>{team.manager?.username}</Link></div>
          </div>
          <div className={styles.secondaryManagers}>
            <h2>SECONDARY MANAGERS</h2>
            {team.secondary_managers?.length ? team.secondary_managers.map((manager, i) => <div key={i}> - <Link to={`/teams/user/${manager?.id}`}>{manager.username}</Link></div>) : <div> This team has not secondary managers. </div>}
          </div>
          <div className={styles.members}>
            <h2>MEMBERS</h2>
            {team.members?.length ? team.members.map((member, i) => <div key={i}> - <Link to={`/teams/user/${member?.id}`}>{member.username}</Link></div>) : <div> This team has not members. </div>}
          </div>
        </section>
  );
}
