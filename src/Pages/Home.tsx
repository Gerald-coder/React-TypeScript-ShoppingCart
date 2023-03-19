import React from "react";
import { Button, Card } from "react-bootstrap";
import "./home.css";
import {
  backToTab,
  dataThresh,
  dragClick,
  deleteBtn,
  reOpen,
} from "../Utilities/Svg";

function Home() {
  return (
    <Card style={{ border: "none" }}>
      <Card.Title className="m-auto mt-4" style={{ color: "#54B4D3" }}>
        Home of all luxury shoping
      </Card.Title>
      <Card.Body className="d-flex container gap-5">
        <section className="me-auto mt-5 w-100">
          <p style={{ fontWeight: "bold" }}>welcome to our site</p>
          <h2 style={{ color: "#54B4D3" }}>Shopping Cart</h2>
          <h3 style={{ color: "#54B4D3" }} className="text-muted">
            Company Website
          </h3>
          <p className="mt-4">
            when shopping becomes a habit, your comfort becomes our concern, we
            are here to offer best cthe customer experience ever had, we serve
            you from the comfort of your home
          </p>
          <div className="d-flex gap-2 mt-4">
            <Button variant="none">{backToTab}</Button>
            <Button variant="none">{dragClick}</Button>
            <Button variant="none">{reOpen}</Button>
            <Button variant="none">{dataThresh}</Button>
          </div>
        </section>
        <Card.Img
          src="../public/imgs/shopping-cart.png"
          style={{ width: "500px", height: "400px" }}
        />
      </Card.Body>
    </Card>
  );
}

export default Home;
