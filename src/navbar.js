import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return <nav className='navbar'>
        <li>
            <NavLink to = '/'>Home</NavLink>
        </li>
        <li>
            <NavLink to = '/team'>Team</NavLink>
        </li>
    </nav>
}