import './NavBar.css'
import { useNavigate } from 'react-router-dom'
export default function NavBar() {
    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <h1 className='navbar__name' onClick={() => {navigate('/')}} style={{'cursor': 'pointer'}}>Рисовальня</h1>
        </div>
    )
}