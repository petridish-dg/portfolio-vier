import React from "react";

import s from "/styles/components/Scope.module.css";

const Scope = ({ children }) => {
  return (
    <div className={s.scopeCircle}>
      <p className={s.cardScope}>{children}</p>
    </div>
  );
};

export default Scope;
