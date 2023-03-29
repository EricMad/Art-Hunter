import React from "react";

import ProfileLink from "./ProfileLink";

function Header({ title, icon }) {
  return (
    <header className="header">
      {icon ? <ProfileLink title={title} /> : ""}
      <h1 className="header__title">{title}</h1>
    </header>
  );
}

export default Header;
