
import './avatar.css'

const Avatar = ({user}) => {
    
    return (
        <div className="avatar-div">
            {user !==undefined &&
             user?.firstname?.substr(0, 2)}
        </div>
    )
}

export default Avatar;