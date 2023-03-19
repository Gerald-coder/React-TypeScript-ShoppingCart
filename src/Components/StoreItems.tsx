import { Card, Button } from "react-bootstrap";
import { useShoppingCartContext } from "../Context/ShoppingCartContext";
import FormatCurrency from "../Utilities/FormatCurrency";

type storeProptypes = {
  name: string;
  id: number;
  price: number;
  imgUrl: string;
};

export default function StoreItems({
  name,
  id,
  price,
  imgUrl,
}: storeProptypes) {
  const {
    decreaseCartQuantity,
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCartContext();

  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        // style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              variant="info"
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              + add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button variant="info" onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button variant="info" onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </div>
              <Button
                variant="info"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
