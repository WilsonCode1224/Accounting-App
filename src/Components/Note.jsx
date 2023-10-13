import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Button } from "@mui/material";
import Calculator from "./Calculator";
const Note = () => {
  return (
    <>
      <RouteLink to="/">
        <Button sx={{ padding: "10px", marginTop: "10px" }} variant="outlined">
          Go back.
        </Button>
      </RouteLink>
      <Calculator />
    </>
  );
};

export default Note;
