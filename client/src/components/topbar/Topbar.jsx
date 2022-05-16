import "./topbar.css";
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
              <NavLink to='/' className='link'>
                <span className="logo">BabasteSocial</span>
              </NavLink>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input placeholder="Search for friend, post or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
              <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
              </div>
              <div className="topbarIcons">
                <div className="topbarIconItem">
                  <Person />
                  <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                  <Chat />
                  <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                  <Notifications />
                  <span className="topbarIconBadge">1</span>
                </div>
              </div>
              <NavLink to={`/profile/${user.username}`}>
              <img src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.jpg"} alt="profile" className="topbarImg" />
              </NavLink>
            </div>
        </div>
    );
}
