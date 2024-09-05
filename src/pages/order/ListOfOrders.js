import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./OrderHistory.scss";
import {
  getOrders,
  selectOrders,
} from "../../redux/features/order/orderSlice";
import Loader from "../../components/loader/Loader";

const ListOfOrders = ({openOrderDetails}) => {
  const { isLoading, isError, message, orders } = useSelector(
    (state) => state.order
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  // const handleClick = (id) => {
  //   navigate(`/order-details/${id}`);
  // };

  return (
    
        <>
          {isLoading && <Loader />}
          <div className={"table"}>
            {orders.length === 0 ? (
              <p>No order found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Date</th>
                    <th>Order ID</th>
                    <th>Order Amount</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    const {
                      _id,
                      orderDate,
                      orderTime,
                      orderAmount,
                      orderStatus,
                    } = order;
                    return (
                      <tr key={_id} onClick={() => openOrderDetails(_id)}>
                        <td>{index + 1}</td>
                        <td>
                          {orderDate} at {orderTime}
                        </td>
                        <td>{_id}</td>
                        <td>
                          {"₹"}
                          {orderAmount}
                        </td>
                        <td>
                          <p
                            className={
                              orderStatus !== "Delivered"
                                ? `${"pending"}`
                                : `${"delivered"}`
                            }
                          >
                            {orderStatus}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </>
     
  );
};

export default ListOfOrders;
