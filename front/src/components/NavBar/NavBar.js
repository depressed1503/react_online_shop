import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

export default function NavBar() {
    const navigate = useNavigate()
    const {user, setUser} = useUserContext()
    return (
        <div className='navbar'>
            <h1 className='navbar__name' onClick={() => {navigate('/')}} style={{'cursor': 'pointer'}}>Рисовальня</h1>
            <span style={{'position': 'absolute', 'top': '30px', 'right': '50px'}}>{user?.username}</span>
        </div>
    )
}