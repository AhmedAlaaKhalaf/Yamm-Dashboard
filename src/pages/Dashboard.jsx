import React, { useEffect, useState } from "react";
import { fetchOrders, updateOrder } from "../services/api";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/sidebar/Sidebar";
import TableComponent from "../components/Table";



export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    // component did mount 
  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to display orders");
        setLoading(false);
      });
  }, []);

  const handleUpdate = (id, updates) => {
    setOrders((prev) => prev.map((order) => (order.id === id ? { ...order, ...updates } : order)));
    updateOrder(id, updates);
  };

  return <>
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} md={4} className="p-0">
          <Sidebar />
        </Col>

        <Col xs={12} md={8} className="p-4 bg-light">
          <h2 className="mb-4 text-primary fw-bold">Refund Orders Dashboard</h2>

          {loading && (
            <div className="text-center my-5">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          {!loading && !error && <TableComponent data={orders} onUpdate={handleUpdate} />}

          
        </Col>
      </Row>
    </Container>
    </>
};
