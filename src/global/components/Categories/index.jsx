import * as React from "react";
import menu from "../../../assets/menu.svg";
import "./style.css";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function Categories(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (props.type == "header") {
    return (
      <>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={menu} alt="" /> <span>&ensp;&ensp;Categorias</span>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
              padding: "10px 50px",
            },
          }}
        >
          <a href={"/categoria/1"} className="links">
            <MenuItem onClick={handleClose}>Magic</MenuItem>
          </a>
          <a href={"/categoria/2"} className="links">
            <MenuItem onClick={handleClose}>Pokémon</MenuItem>
          </a>
          <a href={"/categoria/3"} className="links">
            <MenuItem onClick={handleClose}>Sleeves</MenuItem>
          </a>
          <a href={"/categoria/4"} className="links">
            <MenuItem onClick={handleClose}>Deck Box</MenuItem>
          </a>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <span>
            Olá, {JSON.parse(sessionStorage.getItem("user")).username}
          </span>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
              padding: "10px 15px",
            },
            left: -30,
          }}
        >
          <MenuItem
            onClick={() => {
              window.location.href = "/meuspedidos";
            }}
          >
            Meus Pedidos
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location.href = "/costumer";
            }}
          >
            Meus Dados
          </MenuItem>
          <MenuItem
            onClick={() => {
              sessionStorage.removeItem("user");
              window.location.href = "/";
            }}
          >
            Sair
          </MenuItem>
        </Menu>
      </>
    );
  }
}
