import React from "react";
import { useGetTeamQuery } from "../../../../features/TeamApi/TeamApi";
import Member from "./Member";

const TeamMember = () => {
  const { data: team, isError, isLoading, error } = useGetTeamQuery();
  console.log(team);
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>An Error Occurred</div>;
  }
  if (!isError && !isLoading && team.length === 0) {
    content = <div>No team Members Found</div>;
  }
  if (!isError && !isLoading && team.length > 0) {
    content = team.map((member) => (
      <Member key={member.id} member={member}></Member>
    ));
  }
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default TeamMember;
