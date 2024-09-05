import React, { useState } from 'react'
import './Radio.scss'
import {
    SAVE_PAYMENT_METHOD,
    selectPaymentMethod,
  } from "../../redux/features/checkout/checkoutSlice";
import { useDispatch ,useSelector} from 'react-redux';
import {toast} from 'react-toastify'
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { useNavigate } from 'react-router-dom';

const PaymentOptions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [paymentMethod,setPaymentMethod] = useState("");
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const setPayment = (e) => {
        e.preventDefault();
        if (paymentMethod === "") {
            return toast.error("Please select a payment method");
          }
          dispatch(SAVE_PAYMENT_METHOD(paymentMethod));
      
          if (isLoggedIn) {
            navigate("/checkout-details");
          } else {
            navigate("/login?redirect=cart");
          }
      };

  return (
   <>
   <p>Please choose a payment method</p>
   <form className='--form-control' onSubmit={setPayment}>
   <label htmlFor="stripe" className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name={"paymentMethod"}
                        id={"stripe"}
                        value={"stripe"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="custom-radio"></span>
                      Stripe
                    </label>
                    {/* <label htmlFor={"flutterwave"} className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name={"paymentMethod"}
                        id={"flutterwave"}
                        value={"flutterwave"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="custom-radio" />
                      Flutterwave
                    </label>
                    <label htmlFor={"paypal"} className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name={"paymentMethod"}
                        id={"paypal"}
                        value={"paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="custom-radio" />
                      Paypal
                    </label> */}
                    <label htmlFor={"wallet"} className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name={"paymentMethod"}
                        id={"wallet"}
                        value={"wallet"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="custom-radio" />
                      Wallet
                    </label>
                    <button
                      type="submit"
                      className="--btn --btn-primary --btn-block"
                    >
                      Checkout
                    </button>
   </form>
   <p>Tax an shipping calculated at checkout</p>
   </>
  )
}

export default PaymentOptions