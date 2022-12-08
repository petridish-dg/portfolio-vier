import "the-new-css-reset/css/reset.css";

import LeftHalf from "./LeftHalf";
import s from "/styles/UI/Layout.module.css";

const Layout = ({ children }) => {
  return <div className={s.mainContainer}>{children}</div>;
};

export default Layout;
