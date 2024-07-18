import Logo from "../../src/asset/logo/Logo.png";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center p-4 bg-primary">
      <img src={Logo} alt="Logo" className="w-auto h-32" />{" "}
     
      
    </nav>
  );
};

export default Nav;
