
import './avatar.css'

const Avatar = ({user}) => {
    
    return (
        <div className="avatar-div">
            {user !==undefined &&
             user?.firstname?.substr(0, 1).toUpperCase()}
        </div>
    )
}

export default Avatar;