import React from "react";
import { Dropdown} from "react-bootstrap";

export default function ActionDropdown({ onSelect }) {
  return <>
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle variant="secondary" size="sm">Actions</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSelect("accept")}>Not Yet</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelect("accept")}>Accept</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelect("reject")}>Reject</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelect("escalate")}>Escalate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
};

