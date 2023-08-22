import './app.scss';

import Header from './components/Header';
import Profile from './components/Profile';

import Zoe from './data/zoe.json';
export default function Home() {
  return (
    <>
      <Header></Header>

      {/* <Nav></Nav> */}
      
      <Profile
        person={Zoe}
      />

      <footer>
        <div>&copy; ZoeSteel.com. All Rights Reserved.</div>
      </footer>
    </>
  )
}
