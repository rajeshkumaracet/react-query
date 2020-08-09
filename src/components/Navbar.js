import React, { useState } from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Planet</button>
      <button onClick={() => setPage("people")}>People</button>
    </nav>
  );
};

export default Navbar;
