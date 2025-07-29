import React, { useEffect, useState, Suspense } from "react";
import RemotePage from "./PageRemote";
import { loadRemoteComponent } from "../loadRemoteComponent";
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

import ErrorBoundary from "./ErrorBoundary";

const LazyMenu = React.lazy(() => import("host_app/Menu"));

const App = () => {
  // const [MenuComponent, setMenuComponent] = useState<React.ComponentType | null>(null);
  const [useLazy, setUseLazy] = useState(true); // Флаг для переключения способа

  // useEffect(() => {
  //   if (!useLazy) {
  //     loadRemoteComponent({ remoteName: "host_app", moduleName: "./Menu" })
  //       .then((mod) => setMenuComponent(() => mod))
  //       .catch((err) => console.error("Ошибка загрузки Menu:", err));
  //   }
  // }, [useLazy]);

  return (
    <BrowserRouter>
      <button onClick={() => setUseLazy((prev) => !prev)}>
        Переключить способ загрузки Menu
      </button>

      <ErrorBoundary>
        <Suspense fallback={<div>Загрузка меню...</div>}>
          {useLazy ? LazyMenu : 'попробуем загрузить еще раз'}
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Загрузка меню...</div>}>
          <LazyMenu />
        </Suspense>
      </ErrorBoundary>

        <Routes>
          <Route path="/" element={<RemotePage />} />
          <Route path="/work" element={<div> WORK! </div>} />
        </Routes>
      <RemotePage />
    </BrowserRouter>
  );
};

export default App;
