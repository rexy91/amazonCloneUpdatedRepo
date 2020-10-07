import React from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Narbar.css'
import {useStateValue} from '../StateProvider'

function Narbar() {

// initial state has {basket: []} inside reducer.js 
    const [state, dispatch] = useStateValue();
    console.log(state) 
    
    return (
        <nav className='header'>
            <Link>
                <img
                    className='header_logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                /> 
            </Link>

        <div className='header_search'>
            <input type='text' className='header_searchInput'/>
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
            
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLine1'>Hello</span>
                        <span className='header_optionLine2'>Sign In</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLine1'>Returns</span>
                        <span className='header_optionLine2'>Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLine1'>Your</span>
                        <span className='header_optionLine2'>Prime</span>
                    </div>
                </Link>

                <Link to='/checkout' className='header_link'>
                    <div className='header_optionCheckout'>
                            <ShoppingBasketIcon />
                            <span className='header_optionLine2 header_itemsCount' >{state?.basket?.length}</span>
                    </div>
                </Link>
        </div>
        </nav>
    )
}

export default Narbar
