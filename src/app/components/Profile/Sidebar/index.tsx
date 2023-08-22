import Image from "next/image";

import Interests from "../Interests";
import Contact from "../Contact";
import './sidebar.scss';

export default function Sidebar({person}) {
  return (
    <aside className="profile--sidebar">
      <div className="sidebar-component profile--about">
        <div className="profile--name"><h2>{person.name}</h2></div>
          <div className="profile--intro">
            <div className="profile--photo">
              <Image 
                src={person.imgSrc}
                alt=""
                width="200"
                height="200"
              />
            </div>
            <div className="profile--quote">{`"${person.quote}"`}</div>
            <p>{person.pronouns}</p>
            <p>{person.position}</p>
            <p>{person.location.city}</p>
            <p>{person.location.province}</p>
            <p>{person.location.country}</p>
          </div>
        </div>

        <Contact person={person} />
        <div className="sidebar-component profile--myspace-url">
          <h4>GitHub URL:</h4>
          <p>{person.github}</p>
        </div>
        <Interests person={person} />

        <div className="profile--details sidebar-component">
          <div className="sidebar-component--title">{`${person.name}'s Details`}</div>
          <div className="profile--details-table">
            <div className="interests--category">Status:</div>
            <div className="interests--answers">{person.status}</div>
    
            <div className="interests--category">Here for:</div>
            <div className="interests--answers">{person.herefor}</div>
          </div>
        </div>
      </aside>
  )
}