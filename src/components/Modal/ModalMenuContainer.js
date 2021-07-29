import { useState } from "react";

export const ModalMenuContainer = ({children}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const onMenuToggle = () => {
    setIsMenuOpened(isNavMenuOpened => !isNavMenuOpened);
  }
  return children({ isMenuOpened, onMenuToggle });
};