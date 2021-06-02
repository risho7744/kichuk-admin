import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }] = useStateValue();

    // this is the new basket. this will show the array of newly added objects.
    console.log(basket);
        
    return (
        <nav className="header">

            <Link to="/">
                <img 
                className="header__logo"
                src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" 
                alt="Amazon Logo" 
                />
            </Link>
            

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            

            <div className="header__nav">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Sign In</span>
                        <span className="header__optionLineTwo">Hello Judy</span>
                    </div>
                </Link>


                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>


                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                       <span className="header__optionLineTwo header__basketCount">
                           {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
