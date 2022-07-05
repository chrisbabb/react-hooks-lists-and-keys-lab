import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navItems = links.map((item, index) => {
    return <a href={"#"+item} key={item}>{item}</a>;
  });

  return <nav>{navItems}</nav>;
}

export default NavBar;
