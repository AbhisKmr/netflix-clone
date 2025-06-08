import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Netflix() {
  const [isScrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return <Navbar isScrolled={isScrolled} />;
}
