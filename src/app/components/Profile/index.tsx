"use client"
// import Image from "next/image";
// import '../../app.scss';
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import './profile.scss';

import Sidebar from './Sidebar';
import Project from './Project';
import ColourSwitcher from './ColourSwitcher';

export default function Profile({person}) {

  const storedLayout = JSON.parse(localStorage.getItem('layoutType'));
  const initLayout = storedLayout ? storedLayout : 'default';

  const [layoutType, setLayoutType] = useState(initLayout);

  const handleChange = (e) => {
    setLayoutType(e.target.value);
    localStorage.setItem('layoutType', JSON.stringify(e.target.value));
  }

  return (
    <div className={`profile--container ${layoutType}`}>
      <Sidebar person={person} />
      <main className="profile--main">
        <div className="profile--network">
          {`${person.name} is in your extended network`}
        </div>
        
        <div className="profile--section profile--section-blurbs">
          <div className="profile--section-heading">
              <h4>{`${person.name}'s Blurbs`}</h4>
          </div>
          <div className="profile--section-content">
            <h4>About Me:</h4>
            <p>{person.aboutme}</p>
            <h4>Change Style</h4>
            <ColourSwitcher onChange={handleChange} layoutType={layoutType} />
          </div>
        </div>
        <div className="profile--section profile--section-friends">
          <div className="profile--section-heading">
            <h4>{`${person.name}'s Project Space`}</h4>
          </div>
          <div className='profile--section-content profile--section-friends-grid'>
            {person.projects.map((project, index) => (<Project key={index} project={project} />))}
          </div>
        </div>
        <div className="profile--section profile--section-friends">
          <div className="profile--section-heading">
            <h4>{`${person.name}'s Friends Comments`}</h4>

          </div>
          <div className='profile--section-content profile--section-friends-grid'>
           
            <Link href="/herman">Herman</Link>
          </div>
        </div>
       
      </main>
    </div>
  );
}
