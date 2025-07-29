import React, { Suspense } from "react";
import RemotePage from "./RemotePage";

const Menu = React.lazy(() => import("host_app/Menu"));

const App = () => (
    <>
         <Suspense fallback={<div>Загрузка меню...</div>}>
      <Menu />
    </Suspense>
    <RemotePage />
  </>
);

export default App;