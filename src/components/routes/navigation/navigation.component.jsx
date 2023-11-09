import { Fragment, useContext } from "react";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";

//Router
import { Outlet } from "react-router-dom";

//assets
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

//css
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";

//context
import { CartContext } from "../../../contexts/cart.context";

//firebase
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
