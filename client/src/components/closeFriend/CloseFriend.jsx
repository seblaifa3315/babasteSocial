import "./closeFriend.css";


export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriends">
            <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="friend" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}
