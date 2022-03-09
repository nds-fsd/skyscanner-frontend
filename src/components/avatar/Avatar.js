import bot from '../../images/robot-icon.png';
import './avatar.css'

const Avatar = ({user}) => {
    return (
        <div className="avatar-div">
            {user === undefined ?
                <img src={bot} className="avatar-img" alt=""/> :
                user.firstname.substr(0, 2)}
        </div>
    )
}

export default Avatar;