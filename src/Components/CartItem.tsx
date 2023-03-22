import { Button, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../Context/ShoppingCartContext";
import shopItems from "../data/items.json";
import FormatCurrency from "../Utilities/FormatCurrency";

type cartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: cartItemProps) {
  const { removeFromCart } = useShoppingCartContext();
  const item = shopItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt="item"
        style={{ width: "110px", height: "75px", objectFit: "contain" }}
        className="me-2"
      />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".8rem" }}>
              {quantity}x
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatCurrency(item?.price || 0)}
        </div>
      </div>
      <div> {FormatCurrency((item?.price || 0) * quantity)}</div>
      <Button
        className="ms-2"
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id || 0)}
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
