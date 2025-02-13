import React from "react";
import { Form } from "react-bootstrap";

export default function StatusSwitch ({ isActive, onToggle }) {
  return <>
    <Form.Check
      type="switch"
      id="custom-switch"
      label={isActive ? "Active" : "Inactive"}
      checked={isActive}
      onChange={(e) => onToggle(e.target.checked)}
      className="mx-2"
    />
  </>
};
