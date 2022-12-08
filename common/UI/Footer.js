import s from "/styles/UI/NavFooter.module.css";

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <p className={s.footerItem}>© 2022</p>
      <p className={s.footerItem}>LINKEDIN</p>
    </div>
  );
};

export default Footer;
