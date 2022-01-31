import logo from '../images/logo1.png';
import React from 'react'
import './Navbar.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Navbar=()=> {

    const state = useSelector((state)=> state.handleCart)
    return (
        
            <div className='navb'>

                {/* logo */}
                <div className='logo'>
                    <Link to= '/'>
                        <img src={logo} alt='logo' className='logopic'></img>
                    </Link>
                    
                </div>

                {/* Navigation */}
                <ul className='navbox'>
                    <Link to='/'><li className='navitem'>Home</li></Link>
                    <Link to='/Products'><li className='navitem'>Products</li></Link>
                    <Link to='/About'><li className='navitem'>About</li></Link>
                    <Link to='/Contact'><li className='navitem'>Contact</li></Link>
                    
                    
                </ul>
                <div className='btns'>
                    
                    <Link to="/login"><button><FontAwesomeIcon icon={faSignInAlt} className='navFA'></FontAwesomeIcon> Logic</button></Link>
                    <Link to= "/register"><button><FontAwesomeIcon icon={faUserPlus} className='navFA'></FontAwesomeIcon> Register</button></Link>
                    <Link to= "cart"><button><FontAwesomeIcon icon={faShoppingCart} className='navFA'></FontAwesomeIcon> Cart({state.length})</button></Link>
                </div>
                
            </div>
        
    )
}

export default Navbar;
