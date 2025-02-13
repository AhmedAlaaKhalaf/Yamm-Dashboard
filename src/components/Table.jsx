import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ActionDropdown from "./ActionDropdown";
import StatusSwitch from "./StatusSwitch";



export default function TableComponent ({data,onUpdate}) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleDecisionChange = (id, decision) => {
        onUpdate(id, { decision });
    }
    const handleStatusToggle = (id, isActive) => {
        onUpdate(id, { active: isActive });
      };

      return <>
        <Container className="bg-white shadow p-3 rounded">
        <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Reason</th>
            <th>Store Name</th>
            <th>Store URL</th>
            <th>Amount</th>
            <th>Active</th>
            <th>Decision</th>
            <th>Items Count</th>
            <th>View Order</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.reason}</td>
              <td>{order.store_name}</td>
              <td>{order.store_url}</td>
              <td>${order.amount}</td>
              <td>
              <StatusSwitch isActive={order.active} onToggle={(status) => handleStatusToggle(order.id, status)} />
              </td>
              <td>
              <ActionDropdown onSelect={(decision) => handleDecisionChange(order.id, decision)} />
              </td>
              <td>{order.items.length}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => navigate(`/order/${order.id}`)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="justify-content-center mt-3">
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        />
      </Pagination>
        </Container>
      </>
}