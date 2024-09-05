import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./OrderHistory.scss";
import {
  getOrders,
  selectOrders,
} from "../../redux/features/order/orderSlice";
import Loader from "../../components/loader/Loader";
import ListOfOrders from "./ListOfOrders";

const OrderHistory = () => {
  const { isLoading, isError, message, orders } = useSelector(
    (state) => state.order
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const openOrderDetails= (id) => {
    navigate(`/order-details/${id}`);
  };

  return (
    <section>
      <div className={`container order`}>
        <h2>Your Order History</h2>
        <p>
          Open an order to leave a <b>Product Review</b>
        </p>
        <br />
        <ListOfOrders openOrderDetails={openOrderDetails}/>
      </div>
    </section>
  );
};

export default OrderHistory;
