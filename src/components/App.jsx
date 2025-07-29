import React, { useEffect, useState, Suspense } from "react";
import RemotePage from "./PageRemote";
import { loadRemoteComponent } from "../loadRemoteComponent";

const App = () => {
  const [MenuComponent, setMenuComponent] = useState(null);

  useEffect(() => {
    loadRemoteComponent({ remoteName: "host_app", moduleName: "./Menu" })
      .then((mod) => setMenuComponent(() => mod.default))
      .catch((err) => console.error("Ошибка загрузки Menu:", err));
  }, []);

  
  return (
    <>
      <Suspense fallback={<div>Загрузка меню...</div>}>
        {MenuComponent ? <MenuComponent /> : null}
      </Suspense>
      <RemotePage />
    </>
  );
};

export default App;
