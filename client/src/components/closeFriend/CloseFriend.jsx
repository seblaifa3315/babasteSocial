import "./closeFriend.css";


export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriends">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="friend picture" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}
