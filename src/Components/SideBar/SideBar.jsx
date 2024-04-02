import { NavLink } from "react-router-dom";
import navLinks from '../../assets/dummy-data/navLinks.json';
import './sidebar.css';

export default function SideBar(){
  return(
    <div className="sidebar">
        <div className="sidebar_top">
          <h2><i className="ri-taxi-line"></i> Car Rental</h2>
        </div>
        <div className="sidebar_content">
          <div className="menu">
            <ul className="nav_list">
            {navLinks.map((item, index) => (
              <li className="nav_item" key={index}>
                <NavLink  to={item.path}  className={
                    (navClass) => navClass.isActive ? "nav_active nav_link" : "nav_link"
                  }>
                  <i className={item.icon}></i>
                  {item.display}
                </NavLink>
              </li>
            ))}
            </ul>
          </div>
        </div>
    </div>
  );
}