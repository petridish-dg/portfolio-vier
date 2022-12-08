import Footer from "./Footer";
import s from "/styles/UI/Halves.module.css";

const LeftHalf = ({ children }) => {
  return (
    <div className={s.leftHalf}>
      <div className={s.leftInnerContainer}>{children}</div>
    </div>
  );
};

export default LeftHalf;
