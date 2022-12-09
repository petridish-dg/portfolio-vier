import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import s from "/styles/components/WorkCard.module.css";

const WorkCard = ({ year, title, scope, link, image }) => {
  const MotionLink = motion(Link);

  const variants = {
    cardInitial: {
      opacity: 1,
    },
    cardHover: {
      opacity: 1,
    },
    imageHover: {
      scale: 0.98,
    },
  };

  const imageVariants = {
    imageInitial: {
      scale: 1,
    },
    imageHover: {
      scale: 0.98,
    },
  };

  const [imageHover, setImageHover] = useState(false);

  return (
    <MotionLink
      href={link}
      className={s.workCard}
      variants={variants}
      initial="cardInitial"
      onMouseEnter={() => setImageHover(true)}
      onMouseLeave={() => setImageHover(false)}
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
      <div className={s.workImageContainer}>
        <motion.div
          className={s.workCardImage}
          variants={imageVariants}
          initial="imageInitial"
          animate={imageHover ? "imageHover" : "imageInitial"}
        ></motion.div>
      </div>
      <div className={s.workCardTitle}>
        <p className="h1-style">{title}</p>
      </div>
    </MotionLink>
  );
};

export default WorkCard;
