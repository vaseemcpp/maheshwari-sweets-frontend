import { useEffect, useState } from 'react'
import styles from './auth.module.scss'
import registerImg from "../../assetss/login.png";
import { Link ,useNavigate } from 'react-router-dom'
import Card from "../../components/card/Card";
import { validateEmail } from '../../utils';
import {useDispatch} from "react-redux"
import { toast } from "react-toastify";
import { RESET_AUTH, register } from "../../redux/features/auth/authSlice";
import Loader from '../../components/loader/Loader';
import { useSelector } from 'react-redux';


const initialState = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
  };

const Register = () => {
    const [formData, setFormData] = useState(initialState);
  const { name, email, password, cPassword } = formData;

  const { isLoggedIn, isLoading, isSuccess } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async (e) => {
   e.preventDefault();
   if (!email || !password) {
    return toast.error("All fields are required");
  }
  if (password.length < 6) {
    return toast.error("Password must be up to 6 characters");
  }
  if (!validateEmail(email)) {
    return toast.error("Please enter a valid email");
  }
  if (password !== cPassword) {
    toast.error("Passwords do not match.");
  }
  const userData = {
    name,
    email,
    password,
  };

  console.log(userData);
  await dispatch(register(userData));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/");
    }

    dispatch(RESET_AUTH());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <>
     {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="cPassword"
                value={cPassword}
                onChange={handleInputChange}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
            </form>

            <span className={styles.register}>
              <p>Already an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="Register" width="400" />
        </div>
      </section>
  </>
  )
}

export default Register