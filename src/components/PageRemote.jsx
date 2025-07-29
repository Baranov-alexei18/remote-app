import React, { Suspense } from "react";

const Menu = React.lazy(() => import("host_app/Menu"));

const PageRemote = () => (
  <>
    <Suspense fallback={<div>Загрузка меню...</div>}>
      <Menu />
    </Suspense>
    <div>Это remote-приложение</div>
  </>
);

export default PageRemote;