import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary">
      <img src="assets/image/navbar-logo.png" alt="Logo" />
      <a
        href="ruta-de-descarga-de-CV.pdf"
        download
        className="px-7 py-3 md:px-9 md:py-4 bg-primary font-medium md:font-semibold text-white text-lg uppercase  rounded-md hover:bg-secondary hover:text-white transition ease-linear duration-500 flex items-center"
      >
        Get my CV
      </a>
    </nav>
  );
};

export default Nav;
