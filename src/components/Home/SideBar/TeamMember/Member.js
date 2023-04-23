import React from 'react';

const Member = ({member}) => {
    let i=`.${member.avatar}`
    return (
        <div className="checkbox-container">
        <img src={require(`${i}`)} className="team-avater" alt="teamPic" />
        <p className="label">{member.name}</p>
      </div>
    );
};

export default Member;