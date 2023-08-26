import React, { useEffect, useState } from 'react';
import '../styles/Teams.css';
import data from '../data.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import mentors from '../mentors.js';

function Teams() {  
    

    return (
        <div className='teams_page'>
            <h1 className='team_heading'>Our Teams</h1>
            <h3 className='tag_line'>Learn from Scientists, research scholars from the top institutes in the world.</h3>

            <div className='universities'>
                {data.map((item) => (
                    <div className='uni_box' key={item}>
                        <img className='imgs' src={item.image} alt="" />
                        <h3>{item.desc}</h3>
                    </div>
                ))}      
            </div>
            <h1 className='team_heading'>Meet Your Mentors</h1>
            <div className='universities'>
                {mentors.map((items) => (
                    <div className='uni_box' id="profile_box" key={items}>
                        {/* <img className='imgs' src={item.image} alt="" /> */}
                        <AccountCircleIcon sx={{ fontSize: 100 }}/>
                        <h3>{items.name}</h3>
                        <h4>{items.uni}</h4>
                    </div>
                ))}      
            </div>
            <h1 className='team_heading'>Mentor and Advisor</h1>
            <div className='universities'>
                {mentors.map((items) => (
                    <div className='uni_box' id="mentor_box" key={items}>
                        <AccountCircleIcon sx={{ fontSize: 100 }}/>
                        <h3>{items.name}</h3>
                        <button>Message him now</button>
                    </div>
                ))}      
            </div>
        </div>
    )
}

export default Teams;