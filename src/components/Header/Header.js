import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';

function Header({term, searchKeyword }) {

    const cartArrr= useSelector(
        (state) => state.carts.cartData
      );

    return (
        <div className="header">
            <div className="header__logo"><h1><Link to="/">LOGO</Link></h1></div>
            <div className="header__search">
                <input 
                className="header__searchInput" 
                type="text"
                placeholder="Search here..."
                value={term}
                onChange={(e) => searchKeyword(e.target.value)}
                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{cartArrr.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
