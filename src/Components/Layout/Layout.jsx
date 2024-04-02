import Router from '../../Routes/Router';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';


export default function Layout(){
  return(
    <div className='layout'>
      <SideBar/>
      <div className='main-layout'>
        <NavBar/>
        <div className='content'>
          <Router/>
        </div>
      </div>
    </div>
  );
}