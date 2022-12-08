import { motion } from "framer-motion";
import Link from "next/link";

import s from "/styles/components/WorkCard.module.css";

const WorkCard = ({ year, title, scope, link, image }) => {
  const MotionLink = motion(Link);

  const variants = {
    initial: {
      opacity: 1,
    },
    hover: {
      opacity: 1,
    },
  };
  return (
    <MotionLink
      href={link}
      className={s.workCard}
      variants={variants}
      initial="initial"
      whileHover="hover"
    >
      <div className={s.workCardHeader}>
        <p className={s.workCardYear}>{year}</p>
        <div className={s.workCardScope}>
          {scope.map((item, index) => (
            <div key={index} className={s.scopeCircle}>
              <p className={s.cardScope}>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={s.workCardImage}></div>
      <div className={s.workCardTitle}>
        <p className="h1-style">{title}</p>
      </div>
    </MotionLink>
  );
};

export default WorkCard;
