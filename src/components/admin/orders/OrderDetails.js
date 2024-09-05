import React from 'react'
import OrderDetailsComp from '../../../pages/order/OrderDetailsComp'
import ChangeOrderStatus from '../changeOrderStatus/ChangeOrderStatus'


const OrderDetails = () => {
  return (
    <>
    <OrderDetailsComp orderPageLink={"/admin/orders"}/>
    <ChangeOrderStatus/>
    </>
  )
}

export default OrderDetails