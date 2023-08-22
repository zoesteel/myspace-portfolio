import './interests.scss';

export default function Interests({person}) {
  const skills = person.skills.join(', ');
  const interests = person.interests.join(', ');
  const music = person.music.join(', ');

  return (
    <>
    <div className="sidebar-component interests">
      <div className="interests--title sidebar-component--title">
        {`${person.name}'s Interests`}
      </div>
      <div className="interests--info">
        <div className="interests--category">Skills</div>
        <div className="interests--answers">{skills}</div>

        <div className="interests--category">Interests</div>
        <div className="interests--answers">{interests}</div>

        <div className="interests--category">Music</div>
        <div className="interests--answers">{music}</div>
      </div>
      
    </div>
    </>
  )
}