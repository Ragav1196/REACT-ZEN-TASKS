import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function EditForm({
  editName,
  editPrice,
  editPicture,
  editform,
  editSetName,
  editSetPrice,
  editSetPicture,
  getProducts,
  hideEditForm,
  setHideEditForm,
}) {
  let editProduct = () => {
    setHideEditForm(false);

    const newProduct = {
      name: editName,
      price: editPrice,
      picture: editPicture,
    };

    fetch(
      `https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task/${editform}`,
      {
        method: "PUT",
        body: JSON.stringify(newProduct),
        headers: { "Content-Type": "application/json" },
      }
    ).then(getProducts);
  };

  return (
    <section className="editFormContainer">
      {hideEditForm ? (
        <div id="editForm" className="editProduct">
          <TextField
            onChange={(data) => editSetName(data.target.value)}
            value={editName}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(data) => editSetPrice(data.target.value)}
            value={editPrice}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={(data) => editSetPicture(data.target.value)}
            value={editPicture}
            id="outlined-basic"
            label="Product Picture URL"
            variant="outlined"
          />

          <IconButton
            id="editFormHideBtn"
            onClick={() => setHideEditForm(false)}
            aria-label="delete"
            color="primary"
          >
            <VisibilityOffIcon />
          </IconButton>

          <Button
            onClick={editProduct}
            variant="outlined"
            color="success"
            aria-required
            startIcon={<SaveIcon />}
          >
            SAVE
          </Button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
