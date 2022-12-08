import { motion } from "framer-motion";
import Image from "next/image";

import RightHalf from "../common/UI/RightHalf";
import WorkCard from "../common/components/WorkCard";
import worksData from "../data/worksData";
import LeftHalf from "/common/UI/LeftHalf";
import PDG from "/public/pdg.svg";
import s from "/styles/Home.module.css";

const index = () => {
  const MotionLogo = motion(Image);

  return (
    <>
      <LeftHalf>
        <section className={s.hero}>
          <motion.div className={s.logoHero} whileHover={{ rotate: 10 }}>
            <MotionLogo src={PDG} alt="logo" fill={true} className={s.logo} />
          </motion.div>
          <h1 className={s.heroHeading}>
            POWERED BY CURIOSITY.
            <br />
            DRIVEN BY DESIGN.{" "}
          </h1>
        </section>
        <section className={s.aboutSection}>
          <h2 className={s.aboutHeading}>ABOUT</h2>
          <p className="paragraph">
            a very good job is an experiential house, focused on amplifying
            entertainment entities across film, television, music, and fashion.
            We help brands and studios tell their stories through events,
            detail-driven content, influencer outreach, and digital marketing
            rollouts. What makes us different is our ability to hone in on the
            truth of your brand, based on the insights of your audience, without
            all the fluff.
          </p>
        </section>
      </LeftHalf>
      <RightHalf>
        {worksData.map((work, index) => (
          <WorkCard {...work} key={index} />
        ))}
      </RightHalf>
    </>
  );
};

export default index;
