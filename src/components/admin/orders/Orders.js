// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getOrders } from "../../../redux/features/order/orderSlice";
// import Loader from "../../loader/Loader";

// const Orders = () => {
//   const { isLoading, isError, message, orders } = useSelector(
//     (state) => state.order
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getOrders());
//   }, [dispatch]);

//   const handleClick = (id) => {
//     navigate("/admin/order-details/" + id);
//   };

//   return (
//     <div>Orders</div>
//   )
// }

// export default Orders

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../../redux/features/order/orderSlice";
import Loader from "../../loader/Loader";
import ListOfOrders from "../../../pages/order/ListOfOrders";

const Orders = () => {
  const { isLoading, isError, message, orders } = useSelector(
    (state) => state.order
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const openOrderDetails = (id) => {
    navigate("/admin/order-details/" + id);
  };

  return (
    <section>
      <div className={`container order`}>
        <h2>All Orders</h2>
        <p>
          Open an order to <b>Change Order Status.</b>
        </p>
        <br />
        <ListOfOrders openOrderDetails={openOrderDetails}/>
      </div>
    </section>
  );
};

export default Orders;
