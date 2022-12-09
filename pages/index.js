import { motion } from "framer-motion";
import Image from "next/image";

import Contact from "../common/UI/Contact";
import RightHalf from "../common/UI/RightHalf";
import Scope from "../common/components/Scope";
import WorkCard from "../common/components/WorkCard";
import worksData from "../data/worksData";
import LeftHalf from "/common/UI/LeftHalf";
import PDG from "/public/pdg.svg";
import s from "/styles/Home.module.css";

const index = () => {
  const MotionLogo = motion(Image);

  const scopeList = [
    { symbol: "B", name: "Branding" },
    { symbol: "S", name: "Identity Systems" },
    { symbol: "D", name: "Direction" },
    { symbol: "I", name: "Interface Design" },
    { symbol: "X", name: "User Experience" },
    { symbol: "E", name: "Editorial" },
    { symbol: "3", name: "3D Design" },
  ];

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
          <h2 className="sectionHeading">ABOUT</h2>
          <p className="paragraph">
            As a multidisciplinary designer, I am passionate about human and
            design interaction not limited to one medium or another i love
            working at the intersection of creativity and seamless integration
            through both digital and print products
          </p>
        </section>
        <section className={s.infoSection}>
          <div className={s.infoLeft}>
            <h2 className="sectionHeading">CAPABILITIES</h2>
            <ul className={s.scopeList}>
              {scopeList.map((scope, index) => (
                <li className={s.scopeItem} key={index}>
                  <Scope>{scope.symbol}</Scope> <p>- {scope.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Contact />
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
