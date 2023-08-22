"use client"
// import Image from "next/image";
// import '../../app.scss';
import { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


import './profile.scss';

import Sidebar from './Sidebar';
import Project from './Project';
import ColourSwitcher from './ColourSwitcher';

export default function Profile({person}) {
  const [showDialog, setShowDialog] = useState(false);
  const projectOpen = () => setShowDialog(true);
  const projectClose = () => setShowDialog(false);
  const [layoutType, setLayoutType] = useState('default');
  
  const handleChange = (e) => {
    setLayoutType(e.target.value);
  }

  console.log(layoutType);
  return (
    <div className={`profile--container ${layoutType}`}>
      <Sidebar person={person} />
      <main className="profile--main">
        <div className="profile--network">
          {`${person.name} is in your extended network`}
        </div>
        
        <div className="profile--section-blurbs">
          <div className="profile--section-heading">
              <h4>{`${person.name}'s Blurbs`}</h4>
          </div>
          <div className="profile--section">
            <h4>About Me:</h4>
            <p>{person.aboutme}</p>
            <h4>Change Style</h4>
            <ColourSwitcher onChange={handleChange} />
          </div>
        </div>
        <div className="profile--section-friends">
          <div className="profile--section-heading">
            <h4>{`${person.name}'s Project Space`}</h4>
          </div>
          <div className='profile--section profile--section-friends-grid'>
            <Project person={person} onClick={projectOpen} />
            <Project person={person} onClick={projectOpen} />
            <Project person={person} onClick={projectOpen} />
            <Project person={person} onClick={projectOpen} />
            <Project person={person} onClick={projectOpen} />
            <Project person={person} onClick={projectOpen} />
            <Project person={person} onClick={projectOpen} />
            <Project person={person} onClick={projectOpen} />
          </div>
        </div>
        <button onClick={setShowDialog}>Open modal</button>
        <Modal open={showDialog} onClose={projectClose} center>
        <h2>Simple centered modal</h2>
      </Modal>
      </main>
    </div>
  );
} 