import React, { useEffect, useState, Suspense } from "react";
import RemotePage from "./PageRemote";
import { loadRemoteComponent } from "../loadRemoteComponent";

const LazyMenu = React.lazy(() => import("host_app/Menu"));

const App = () => {
  const [MenuComponent, setMenuComponent] = useState<React.ComponentType | null>(null);
  const [useLazy, setUseLazy] = useState(true); // Флаг для переключения способа

  useEffect(() => {
    if (!useLazy) {
      loadRemoteComponent({ remoteName: "host_app", moduleName: "./Menu" })
        .then((mod) => setMenuComponent(() => mod.default))
        .catch((err) => console.error("Ошибка загрузки Menu:", err));
    }
  }, [useLazy]);

  return (
    <>
      <button onClick={() => setUseLazy((prev) => !prev)}>
        Переключить способ загрузки Menu
      </button>

      <Suspense fallback={<div>Загрузка меню...</div>}>
        {useLazy ? <LazyMenu /> : MenuComponent ? <MenuComponent /> : null}
      </Suspense>

      <RemotePage />
    </>
  );
};

export default App;
