import Link from "next/link";
import { useEffect } from "react";

import s from "/styles/UI/NavFooter.module.css";

const Navbar = () => {
  return (
    <div className={s.navContainer}>
      <Link href={"/"} className={s.navItem}>
        PETER DE GUZMAN
        <br />
        DESIGNER
      </Link>
      <p className={s.navItem}>
        CHICAGO, IL
        <br />
        (USA)
      </p>
      <p className={s.navItem}>
        20:00:00
        <br />
        PM
      </p>
    </div>
  );
};

export default Navbar;
