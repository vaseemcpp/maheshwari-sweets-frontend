import { useEffect, useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assetss/login.png'
import { Link ,useNavigate, useSearchParams } from 'react-router-dom'
import Card from "../../components/card/Card";
import { useDispatch } from 'react-redux';
import { RESET_AUTH, login } from "../../redux/features/auth/authSlice";
import { validateEmail } from '../../utils';
import { toast } from "react-toastify";
import Loader from '../../components/loader/Loader';
import { useSelector } from 'react-redux';
import { getCartDB, saveCartDB } from '../../redux/features/cart/cartSlice';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, isLoading, isSuccess } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [urlParams] = useSearchParams();
  const redirect = urlParams.get("redirect")
  console.log(urlParams.get("redirect"));

  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    const userData = {
      email,
      password,
    };
    console.log(userData);
    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      if(redirect === "cart"){
        dispatch(
          saveCartDB({cartItems: JSON.parse
            (localStorage.getItem("cartItems"))
          })
        )
        return navigate("/cart")
      }
      dispatch(getCartDB());
    }

    dispatch(RESET_AUTH());
  }, [isLoggedIn, isSuccess, dispatch, navigate,redirect]);


  return (
    <>
     {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400" />
      </div>

      <Card>
        <div className={styles.form}>
          <h2>Login</h2>

          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>

          <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  </>
  )
}

export default Login