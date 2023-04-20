import React from 'react';
import ProjectList from './ProjectList/ProjectList';
import TeamMember from './TeamMember/TeamMember';

const SideBar = () => {
    return (
        <div class="sidebar">
            <ProjectList></ProjectList>
            <TeamMember></TeamMember>
        </div>
    );
};

export default SideBar;