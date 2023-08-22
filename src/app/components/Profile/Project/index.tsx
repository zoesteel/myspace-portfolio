import Image from "next/image";

import './project.scss';

export default function Project({person, onClick}) {
  return (
    <div className="profile--section-friends-project">
      Title

      <Image
        src={person.imgSrc}
        alt=""
        width="200"
        height="200"
      />
    </div>
  )
}
