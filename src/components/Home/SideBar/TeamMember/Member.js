import React from 'react';
import sumit from "../../../../images/avatars/sumit.png";
const Member = ({member}) => {
    return (
        <div className="checkbox-container">
        <img src={sumit} className="team-avater" alt="teamPic" />
        <p className="label">{member.name}</p>
      </div>
    );
};

export default Member;