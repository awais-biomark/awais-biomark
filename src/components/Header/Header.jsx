import React, { useState } from "react";
import NavBar from "components/Header/NavBar";
import Loader from "components/Loader/Loader";

const Header = (props) => {
  const getUser = localStorage.getItem("rider");
  const [loader, setLoader] = useState(false);

  return (
    <>
      {loader ? (
        <Loader bgWhite={true} />
      ) : (
        <NavBar user={props.user} getUser={getUser} setLoader={setLoader} />
      )}
    </>
  );
};

export default Header;
