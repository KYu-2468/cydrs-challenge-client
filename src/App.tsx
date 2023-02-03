import React from "react";
import "./App.css";
import Search from "./components/Search";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function App() {
  const isLaptop = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <Typography
        sx={{ fontSize: isLaptop ? "3.5rem" : "1.3rem" }}
        textAlign="center"
        mt={8}
        mb={8}
      >
        Search Domain and IP Address 🚀
      </Typography>
      <Search />
    </div>
  );
}
