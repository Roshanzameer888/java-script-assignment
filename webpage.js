import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Card, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const [salesData, setSalesData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Sales",
        data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Header>Sales</Card.Header>
            <Card.Body>
              <Bar data={salesData} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Customers</Card.Header>
            <Card.Body>
              <Line data={salesData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
