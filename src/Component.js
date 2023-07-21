import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Component = () => {
    const navigate = useNavigate();
    return (
            <div className="App">
            <nav className='navbar'>
                <h2><Link to="/">kalvium</Link></h2>
                <span>
                    <span onClick={()=>navigate("/contacts")}>Contacts</span>
                    <span onClick={()=>navigate("/about")}>About</span>
                </span>
            </nav>
        </div>
      
    )
}

export default Component



