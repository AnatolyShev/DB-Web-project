import React, {useState, useEffect} from 'react';
import { getOrders } from '../../api/orders';

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = getOrders(localStorage.getItem("token"))
    data.then((result) => {
      setOrders(result)
    })
  }, []);


  return (
    <div>
      {orders.map((order) => 
        <div>
          <div>{order.date}, {order.in_work}, {order.is_completed}, {order.note}</div>
          <div>
            {order.data.map((orderInfo) => 
              <div>{orderInfo.super_type}/{orderInfo.type}/{orderInfo.service} - {orderInfo.count}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Orders;