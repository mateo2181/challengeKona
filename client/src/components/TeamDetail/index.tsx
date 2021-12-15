import React from 'react';
import { useParams } from 'react-router-dom';
import useTeam from '../../hooks/useTeam';

// interface Props {
//   teamId: string;
// }

export default function TeamDetail () {
  const params = useParams();
  const teamId = params.teamId as string;
  const { isLoading, error, data: team } = useTeam(teamId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  if (!team) return <div>Team not found</div>;

  return (
        <>
          <h1>Detail Team</h1>
          <div>{team.name}</div>
        </>
  );
}
