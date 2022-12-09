import Link from "next/link";

import s from "/styles/UI/Contact.module.css";

const Contact = () => {
  return (
    <section className={s.contactSection}>
      <h2 className="sectionHeading">Get in Touch</h2>
      <p>Have a project in mind?</p>
      <Link href={"mailto:mail@peterdg.com"}>mail@peterdg.com</Link>
    </section>
  );
};

export default Contact;
