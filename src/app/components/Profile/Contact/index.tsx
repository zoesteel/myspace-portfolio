import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import './contact.scss';

export default function Contact({person}) {
  return (
    <div className="sidebar-component contact--container">
      <div className="sidebar-component--title">{`Contacting ${person.name}`}</div>
      <div className="contact--methods">
        <div className="contact--methods-method" >
          <FontAwesomeIcon
            icon={faEnvelope}
          />
          <p>Send email</p>
        </div>
        <div className="contact--methods-method" >
          <FontAwesomeIcon
            icon={faGithub}
          />
          <p>View GitHub</p>
        </div>
        <div className="contact--methods-method" >
          <FontAwesomeIcon
            icon={faLinkedin}
          />
          <p>View LinkedIn</p>
        </div>
        <div className="contact--methods-method">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="contact--methods-method" >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </div>
  )
}