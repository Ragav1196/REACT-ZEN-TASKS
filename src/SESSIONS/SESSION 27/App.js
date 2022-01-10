import "./App.css";
import { useState } from "react";
import MediaQuery from "react-responsive";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function App() {
  return <ProductsList />;
}

// product list
function ProductsList() {
  const ProductsList = [
    {
      name: "Microsoft Surface Pro 7",
      price: "89,990",
      picture:
        "https://images-eu.ssl-images-amazon.com/images/I/31MN8WI0S6L._AC_SX184_.jpg",
    },
    {
      name: "HP Pavilion",
      price: "66,990",
      picture: "https://m.media-amazon.com/images/I/71hmqIQJFdL._AC_UL320_.jpg",
    },
    {
      name: "Acer Nitro 5",
      price: "68,990",
      picture: "https://m.media-amazon.com/images/I/71evs2WKJjS._AC_UL320_.jpg",
    },
    {
      name: "HP Chromeebook",
      price: "26,990",
      picture: "https://m.media-amazon.com/images/I/613WULNEr1L._AC_UL320_.jpg",
    },
    {
      name: "Lenovo IdeaPad Slim 3",
      price: "39,990",
      picture: "https://m.media-amazon.com/images/I/61s7sJEpsVL._AC_UL320_.jpg",
    },
    {
      name: "Dell 14",
      price: "39,990",
      picture: "https://m.media-amazon.com/images/I/8147cwFm2PL._AC_UL320_.jpg",
    },
    {
      name: "AVITA Cosmos 2 in 1",
      price: "15,990",
      picture: "https://m.media-amazon.com/images/I/51z0Sd72wTL._AC_UL320_.jpg",
    },
    {
      name: "Mi Notebook Pro",
      price: "60,990",
      picture: "https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_UL320_.jpg",
    },
  ];

  return <Content productsList={ProductsList} />;
}

// Total content
function Content({ productsList }) {
  // for calculating the total product in the cart
  const [totalCart, setTotalCart] = useState(0);

  // for the product list
  const [Products, setProducts] = useState(productsList);

  // To hide menu bar
  const [menu, setMenu] = useState(false);

  return (
    <article>
      <section className="menuBarContainer">
        <div className="title">
          <h1>Start Bootstrap</h1>
          <i
            className="material-icons menuButton"
            onClick={() => setMenu(!menu)}
          >
            menu
          </i>
        </div>

        <div className="menuBarSmall">
          <p>Home</p>
          <p>About</p>
          <p>Shop</p>

          <div className="cartButtonContainer">
            <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
              <span>Cart</span> <p>{totalCart}</p>
            </Button>

            <Button
              onClick={() => {
                // emptying the cart to zero
                setTotalCart(0);
                // Refreshing the product list after emptying the cart
                setProducts(productsList);
              }}
              variant="outlined"
              color="error"
              startIcon={<RemoveShoppingCartIcon />}
            >
              Empty Cart
            </Button>
          </div>
        </div>

        <div className="menuBarBig">
          <div className="cartButton">
            <h1>Start Bootstrap</h1>
            <div>
              <p>Home</p>
              <p>About</p>
              <p>Shop</p>
            </div>

            <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
              <span>Cart</span> <p className="TotalCart">{totalCart}</p>
            </Button>

            <Button
              onClick={() => {
                // emptying the cart to zero
                setTotalCart(0);
                // Refreshing the product list after emptying the cart
                setProducts(productsList);
              }}
              variant="outlined"
              color="error"
              startIcon={<RemoveShoppingCartIcon />}
            >
              Empty Cart
            </Button>
          </div>
        </div>
      </section>

      {/* Title */}
      {/* STYLE FOR MOBILE AND TTABLET SIZE SCREEN */}
      <MediaQuery maxWidth={1024}>
        <section
          style={{ transform: menu ? "none" : "translateY(-210px)" }}
          className="TitleContainer"
        >
          <h1>Shop in style</h1>
          <p>With this shop homepage template</p>
        </section>
      </MediaQuery>

      {/* Title */}
      {/* STYLE FOR LAPTOP SIZE SCREEN */}
      <MediaQuery minWidth={1025}>
        <section className="TitleContainer">
          <h1>Shop in style</h1>
          <p>With this shop homepage template</p>
        </section>
      </MediaQuery>

      {/* Product */}
      {/* STYLE FOR MOBILE AND TABLET SIZE SCREEN */}
      <MediaQuery maxWidth={1024}>
        <section
          style={{ transform: menu ? "none" : "translateY(-210px)" }}
          className="productContainer"
        >
          {/* looping over the product list */}
          {Products.map(({ name, price, picture }, i) => (
            <Product
              key={i}
              totalCart={totalCart}
              setTotalCart={setTotalCart}
              name={name}
              price={price}
              picture={picture}
            />
          ))}
        </section>
      </MediaQuery>

      {/* Product */}
      {/* STYLE FOR LAPTOP SIZE SCREEN */}
      <MediaQuery minWidth={1025}>
        <section className="productContainer">
          {/* looping over the product list */}
          {Products.map(({ name, price, picture }, i) => (
            <Product
              key={i}
              totalCart={totalCart}
              setTotalCart={setTotalCart}
              name={name}
              price={price}
              picture={picture}
            />
          ))}
        </section>
      </MediaQuery>
    </article>
  );
}

// Product list rendering
function Product({ totalCart, setTotalCart, name, price, picture }) {
  return (
    <section className="product">
      <div className="imageContainer">
        <img src={picture} alt="Product name"></img>
      </div>
      <div className="productDetails">
        <h3>{name}</h3>
        <p>{price}</p>
        <StarRating />
        <CartButton totalCart={totalCart} setTotalCart={setTotalCart} />
      </div>
    </section>
  );
}

// For the star rating
function StarRating() {
  // to change color onclick
  const [rating, setRating] = useState(null);

  // to change color on hovering
  const [hover, setHover] = useState(null);
  return (
    <div className="starConatiner">
      {/* looping the star button */}
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              // to change color onclick
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              style={{
                // conditional styling for the change of color
                color: ratingValue <= (hover || rating) ? "#ffeb3b" : "black",
              }}
              // to change color on hovering
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
}

function CartButton({ totalCart, setTotalCart }) {
  // to increase the product quantity
  const [cart, setCart] = useState("Add");

  // to make each product quantity to zero when cart is empty
  if (totalCart === 0 && cart !== "Add") {
    setCart("Add");
  }
  return (
    <div>
      {/* for the "add to cart" button */}
      {cart % 1 !== 0 || cart === 0 ? (
        <Button
          onClick={() => {
            setCart("1");
            setTotalCart(totalCart + 1);
          }}
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
        >
          add
        </Button>
      ) : (
        ""
      )}

      {cart % 1 === 0 && cart >= 1 ? (
        <div className="cartIncDECButton">
          {/* for the addition button */}
          <IconButton
            onClick={() => {
              setCart(+cart + 1);
              setTotalCart(totalCart + 1);
            }}
            aria-label="delete"
          >
            <AddCircleIcon />
          </IconButton>

          <h3>{cart}</h3>

          {/* for the subtraction button */}

          <IconButton
            onClick={() => {
              setCart(cart - 1);
              setTotalCart(totalCart - 1);
            }}
            aria-label="delete"
          >
            <RemoveCircleIcon />
          </IconButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

// NETLIFY DELPOYED LINK:
