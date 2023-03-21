import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  py-4">
      <h2
        onClick={() => navigate("/")}
        className="w-full text-center cursor-pointer text-3xl font-bold mb-10"
      >
        스위치원 | 어드민
      </h2>
    </div>
  );
};

export default NavBar;
