import s from "/styles/UI/Halves.module.css";

const RightHalf = ({ children, bg, color, border }) => {
  return (
    <div className={s.rightHalf} style={{ backgroundColor: bg, color: color, border: border }}>
      {children}
    </div>
  );
};

export default RightHalf;
