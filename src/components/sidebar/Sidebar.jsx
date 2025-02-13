import React, { useState } from "react";
import { Navbar, Offcanvas, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* toggle btn only on mobile */}
      <Navbar bg="dark" variant="dark" expand="md" className="d-md-none p-2">
        <Button variant="light" onClick={() => setShow(true)}>
<div classname="hamburger">
  <input classname="checkbox" type="checkbox" />
  <svg fill="none" viewBox="0 0 50 50" height={50} width={50}>
    <path classname="lineTop line" strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 11L44 11" />
    <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 24H43" classname="lineMid line" />
    <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 37H43" classname="lineBottom line" />
  </svg>
</div>

        </Button>
      </Navbar>

      {/* sidebar for large screens */}
      <div className="sidebar d-none d-md-flex flex-column bg-dark text-white p-3 vh-100">
        <h3 className="text-center mb-4">Yamm Dashboard</h3>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" className="sidebar-link">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/orders" className="sidebar-link">Orders</Nav.Link>
          <Nav.Link as={Link} to="/orders" className="sidebar-link">Stores</Nav.Link>
        </Nav>
      </div>

      {/* sidebar for mobile */}
      <Offcanvas show={show} onHide={() => setShow(false)} className="bg-dark text-white">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Yamm Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="sidebar-link" onClick={() => setShow(false)}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/orders" className="sidebar-link" onClick={() => setShow(false)}>Orders</Nav.Link>
            <Nav.Link as={Link} to="/stores" className="sidebar-link" onClick={() => setShow(false)}>Stores</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
