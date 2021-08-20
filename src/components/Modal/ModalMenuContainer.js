import { useEffect } from 'react';
import { useState } from "react";

export const ModalMenuContainer = ({children}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const onMenuToggle = () => {
    setIsMenuOpened(isNavMenuOpened => !isNavMenuOpened);
  }
  useEffect(() => {
    if(isMenuOpened) document.querySelector("header").style.paddingRight = '15px';
    else {document.querySelector("header").style.paddingRight = '0';}
  }, [isMenuOpened])
  return children({ isMenuOpened, onMenuToggle });
};