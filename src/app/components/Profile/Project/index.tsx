import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import './project.scss';

export default function Project({project}) {
  const [showDialog, setShowDialog] = useState(false);

  const projectOpen = () => setShowDialog(true);
  const projectClose = () => setShowDialog(false);
  return (
    <>
      <div className="profile--section-friends-project" onClick={projectOpen}>
        <Image
          src={project.imgSrc}
          alt=""
          width="200"
          height="200"
        />
      </div>
      <Modal open={showDialog} onClose={projectClose} center>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </Modal>
    </>
  )
}
