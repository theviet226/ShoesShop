import { getLocalStorage, removeLocalStorage } from "src/utils";
import { useState, useEffect } from "react";
import css from "./header.module.scss";

import { IconCart, IconSearch } from "src/assets/icons";
import imLogo from "src/assets/images/image3.png";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "src/constants";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "src/redux/slices/cart.slice";
import { RootState } from "src/redux/config-store";
import { clearUser } from "src/redux/slices/userReducerLogin";
import { Search } from "src/templates/search";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    const accessToken = getLocalStorage(ACCESS_TOKEN);
    const storedIsLoggedIn = getLocalStorage('isLoggedIn')
    setIsLoggedIn(!!accessToken || storedIsLoggedIn)
    
  }, []);

  const handleLogout = () => {

    removeLocalStorage(ACCESS_TOKEN);
    removeLocalStorage("userCart");
    removeLocalStorage("tempCart");
    removeLocalStorage(ACCESS_TOKEN);
    removeLocalStorage("isLoggedIn")
    removeLocalStorage("email")
    dispatch(clearCart());
    dispatch(clearUser());

    window.location.reload();
    setIsLoggedIn(false)

    navigate("/");
  };

  const renderLogin = () => {
    const [email, setEmail] = useState<string>('')

    useEffect(() => {
      setEmail(getLocalStorage('email') || '')
    }, [])

    // const { userLogin } = useSelector(
    //   (state: RootState) => state.userReducerLogin,
    // );

    if (isLoggedIn) {
      return (
        <div className={css["header-left-author"]}>
          <Link to="/profile">{email}</Link>
          <Link
            to="/"
            className={css["header-left-author"]}
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      );
    } else {
      return (
        <>

          <div className={css["header-left-author"]}>
            <Link to="/login">Login</Link>
          </div>
          <div className={css["header-left-author"]}>
            <Link to="/register">Register</Link>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <header className={css.header}>
        <Link to={"/"}>
          <img src={imLogo} alt="" />
        </Link>
        <div className={css["header-left"]}>
          <div onClick={openModal} className={css["header-left-search"]}>
            <IconSearch />
            <Link to="/search">Search</Link>
          </div>
          <div className={css["header-left-cart"]}>
            <Link to="/cart">
              <IconCart />
            </Link>
            <span>({cartItemCount})</span>
          </div>
          {renderLogin()}
        </div>
      </header>
      <nav>
        <ul className={css["nav"]}>
          <li>
            <Link className={css["active"]} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/#"}>Men</Link>
          </li>
          <li>
            <Link to={"/#"}>Woman</Link>
          </li>
          <li>
            <Link to={"/#"}>Kid</Link>
          </li>
          <li>
            <Link to={"/#"}>Support</Link>
          </li>
        </ul>
      </nav>
      {isModalOpen && (
        <Search closeModal={closeModal} isOpen={isModalOpen} list={[]} />
      )}
    </>
  );
}

export default Header;
