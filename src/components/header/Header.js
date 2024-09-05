import React, { useState,useEffect } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import {FaShoppingCart,FaUserCircle} from 'react-icons/fa'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RESET_AUTH, logout } from '../../redux/features/auth/authSlice'
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink'
import { UserName } from '../../pages/profile/Profile'
import { AdminOnlyLink } from '../hiddenLink/AdminOnlyRoute'
import { CALCULATE_TOTAL_QUANTITY, selectCartTotalQuantity ,selectCartItems} from '../../redux/features/cart/cartSlice'
import img from '../../assetss/logo1.png'
export const logo = (
      <div className={styles.logo}>
        <Link to='/'>
            <h2>
                Shop<span>Ito</span>
            </h2>
        </Link>
       </div>
);

const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")

const Header = () => {

const [showMenu , setShowMenu] = useState(false);
const [scrollPage, setScrollPage] = useState(false);
const cartItems = useSelector(selectCartItems);
const cartTotalQuantity = useSelector(selectCartTotalQuantity);
const dispatch = useDispatch();
  const navigate = useNavigate();

  
// const fixNavbar = () => {
//   if(window.scrollY > 50){
//     setScrollPage(true);
//   }
//   else{
//     setScrollPage(true)
//   }
// };
// window.addEventListener('scroll',fixNavbar);
const handleLogo = () => {
  navigate('/');
}
const toggleMenu = () => {
    setShowMenu(!showMenu)
}

const hideMenu = () => {
    setShowMenu(false);
}

const logoutUser = async () => {
  await dispatch(logout());
  await dispatch(RESET_AUTH());
  navigate("/login");
}

useEffect(() => {
  dispatch(CALCULATE_TOTAL_QUANTITY());
}, [dispatch, cartItems]);

    const cart = (
        <span className={styles.cart}>
            <Link to='/cart'>
            Cart
            <FaShoppingCart size={20}/>
            <p>{cartTotalQuantity}</p>
            </Link>
        </span>
    );
  return <header className={scrollPage ? `${styles.fixed}` : null}>
   <div className={styles.header}>
   {/* {logo} */}
   <img className= " myimg"src={img} alt="" onClick={handleLogo}/>
   <nav className={showMenu ? `${styles['show-nav']}`: `${styles['hide-nav']}` }>

    <div>
 </div>
    <ul>
        <li className={styles['logo-mobile']}>
          {/* {logo} */}
          <img className= " myimg"src={img} alt="" onClick={handleLogo}/>
          <FaTimes size={22} color="#fff" onClick={hideMenu}/>
        </li>
         <li>
            <NavLink to='/shop'
            className={activeLink}>
            Shop
            </NavLink>
         </li>
         <li>
          <AdminOnlyLink>
          <NavLink to='/admin/home'
            className={activeLink}>
           | Owner
            </NavLink>
          </AdminOnlyLink>
            
         </li>
    </ul>

    <div className={styles["header-right"]}>
     <span className={styles.links}>
     <ShowOnLogin>
                <Link to="/profile">
                  <FaUserCircle size={16} color="#ff7722" />
                  <UserName />
                </Link>
              </ShowOnLogin>
      <ShowOnLogout>
      <NavLink to={'login'} className={activeLink}>
        Login
       </NavLink>
     
      <NavLink to={'register'} className={activeLink}>
        Register
       </NavLink>
      </ShowOnLogout>
    <ShowOnLogin>
    <NavLink to={'order-history'} className={activeLink}>
        My Order
       </NavLink>
    </ShowOnLogin>
       <ShowOnLogin>
       <Link to={'/'} onClick={logoutUser}>
        Logout
       </Link>
       </ShowOnLogin>
       
     </span>
     {cart}
    </div>
   </nav>

   <div className={styles['menu-icon']} >
   {cart}
   <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
   </div>
    </div>
  </header>
    
  
}

export default Header