import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function Product({
  name,
  price,
  picture,
  id,
  getProducts,
  setHideAddProducts,
  setHideAddButton,
  setEditForm,
  editSetName,
  editSetPrice,
  editSetPicture,
  setHideEditForm,
}) {

  const deleteProduct = (id) => {
    fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task/${id}`, {
      method: "DELETE",
    }).then(getProducts);
  };

  return (
    <section
      className="product"
      onClick={() => {
        setHideAddProducts(false);
        setHideAddButton(true);
      }}
    >
      <div className="imageContainer">
        <img src={picture} alt="Product name"></img>
      </div>
      <div className="productDetails">
        <h3>{name}</h3>
        <p>$ {price}</p>
        {/* <StarRating /> */}
        {/* <CartButton totalCart={totalCart} setTotalCart={setTotalCart} /> */}
        <div>
          <IconButton
            onClick={() => deleteProduct(id)}
            aria-label="delete"
            color="error"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditForm(id);
              editSetName(name);
              editSetPrice(price);
              editSetPicture(picture);
              setHideEditForm(true);
            }}
            aria-label="delete"
            color="primary"
          >
            <a href="#editForm">
              <EditIcon />
            </a>
          </IconButton>
        </div>
      </div>
    </section>
  );
}
