import { useState } from "react";
import { Header } from "./Header";

export const HeaderContainer = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const onNavMenuToggle = () => {
    setIsNavMenuOpened(isNavMenuOpened => !isNavMenuOpened);
  }
  return <Header isNavMenuOpened={isNavMenuOpened} onNavMenuToggle={onNavMenuToggle}/>;
};