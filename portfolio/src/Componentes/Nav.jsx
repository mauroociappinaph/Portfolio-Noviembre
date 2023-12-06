import Logo from "../../src/asset/logo/Logo.png";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary">
      <img src={Logo} alt="Logo" className="w-auto h-28" />{" "}
      {/* Ajusta el tamaño del logo */}
    </nav>
  );
};

export default Nav;
