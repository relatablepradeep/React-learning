
import React,{useContext} from 'react';
import UserContext from '../cont/userContext';

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username} and password {user.password}</div>
    
}

export default Profile