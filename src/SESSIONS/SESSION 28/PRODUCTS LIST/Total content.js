import { useState } from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from "@mui/material/TextField";
import { EditForm } from "./EditForm";
import { Product } from "./Product list rendering";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function Content({ products, getProducts }) {
  // TO HIDE ADD FORM
  const [hideAddProducts, setHideAddProducts] = useState(false);

  // TO HIDE ADD PRODUCTS BUTTON
  const [hideAddButton, setHideAddButton] = useState(true);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");

  let addProduct = () => {
    setHideAddProducts(false);
    setHideAddButton(!hideAddButton);

    const newProduct = {
      name,
      price,
      picture,
    };

    fetch("https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "content-Type": "application/json" },
    })
      .then(setName(""))
      .then(setPicture(""))
      .then(setPrice(""))
      .then(getProducts);
  };

  const [editform, setEditForm] = useState(null);

  const [editName, editSetName] = useState("");
  const [editPrice, editSetPrice] = useState("");
  const [editPicture, editSetPicture] = useState("");


  const [hideEditForm, setHideEditForm] = useState(true);

  return (
    <article className="productLtCtnr">
      <section className="menuBarContainer">
        <div className="title">
          <h1>PRODUCTS LIST</h1>
          <div className="addProduct">
            {hideAddButton ? (
              <div>
                <Button
                  onClick={() => {
                    setHideAddProducts(!hideAddProducts);
                    setHideAddButton(!hideAddButton);
                  }}
                  variant="outlined"
                  color="success"
                  startIcon={<AddShoppingCartIcon />}
                >
                  ADD PRODUCTS
                </Button>
              </div>
            ) : (
              ""
            )}
            {hideAddProducts ? (
              <div className="addProduct">
                <TextField
                  onChange={(data) => setName(data.target.value)}
                  value={name}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  onChange={(data) => setPrice(data.target.value)}
                  value={price}
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                />
                <TextField
                  onChange={(data) => setPicture(data.target.value)}
                  value={picture}
                  id="outlined-basic"
                  label="Product Picture URL"
                  variant="outlined"
                />

                <IconButton
                  id="addFormHideBtn"
                  onClick={() => {
                    setHideAddProducts(false);
                    setHideAddButton(true);
                  }}
                  aria-label="delete"
                  color="primary"
                >
                  <VisibilityOffIcon />
                </IconButton>

                <Button
                  onClick={addProduct}
                  variant="outlined"
                  color="success"
                  aria-required
                  startIcon={<AddShoppingCartIcon />}
                >
                  ADD
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="productContainer">
        {/* looping over the product list */}
        {products.map(({ name, price, picture, id }, i) => (
          <Product
            key={i}
            name={name}
            price={price}
            picture={picture}
            id={id}
            getProducts={getProducts}
            setHideAddProducts={setHideAddProducts}
            setHideAddButton={setHideAddButton}
            setEditForm={setEditForm}
            editSetName={editSetName}
            editSetPrice={editSetPrice}
            editSetPicture={editSetPicture}
            setHideEditForm={setHideEditForm}
          />
        ))}
      </section>
      {editform ? (
        <EditForm
          editform={editform}
          editName={editName}
          editPrice={editPrice}
          editPicture={editPicture}
          products={products}
          editSetName={editSetName}
          editSetPrice={editSetPrice}
          editSetPicture={editSetPicture}
          getProducts={getProducts}
          hideEditForm={hideEditForm}
          setHideEditForm={setHideEditForm}
        />
      ) : (
        ""
      )}
    </article>
  );
}
