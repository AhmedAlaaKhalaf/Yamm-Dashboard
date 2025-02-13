import React from "react";
import { useParams } from "react-router-dom";

const OrderPage = ({ orders }) => {
  const { id } = useParams();
  const order = orders.find((order) => order.id === id);

  return (
    <div>
      <h2>Order Details</h2>
      {order ? (
        <ul>
          {order.items.map((item) => (
            <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
          ))}
        </ul>
      ) : (
        <p>Order not found.</p>
      )}
    </div>
  );
};

export default OrderPage;
