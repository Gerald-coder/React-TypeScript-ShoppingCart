import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../Context/ShoppingCartContext";
import CartItem from "./CartItem";
import shopItem from "../data/items.json";
import FormatCurrency from "../Utilities/FormatCurrency";

function ShoppingCart() {
  const { closeCart, isOpen, cartItems } = useShoppingCartContext();
  console.log(isOpen);

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="ms-auto fw-bold">
            Total
            {FormatCurrency(
              cartItems.reduce((total, cartitme) => {
                const item = shopItem.find((i) => i.id === cartitme.id);
                return total + (item?.price || 0) * cartitme.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingCart;
