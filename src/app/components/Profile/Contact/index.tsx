import './contact.scss';

export default function Contact({person}) {
  return (
    <div className="sidebar-component contact--container">
      <div className="sidebar-component--title">{`Contacting ${person.name}`}</div>
      <div className="contact--methods">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}