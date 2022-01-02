import React from 'react'
import {Link} from "react-router-dom"
import {Navbar,Nav} from "react-bootstrap"
function Header() {
    return (
        <div>
        <nav className='nav'>
          <ul>
            <li>
              <Link className='linktext' to="/add">Add Product</Link>
            </li>
            <li>
              <Link className='linktext' to="/update">Update Product</Link>
            </li>
            <li>
              <Link className='linktext' to="/login">Login</Link>
            </li>
            <li>
              <Link className='linktext' to="/register">Register</Link>
            </li>
            
          
          </ul>
        </nav>
        </div>
    )
}

export default Header
