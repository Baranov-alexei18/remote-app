import React, { Suspense } from "react";

// лениво импортируем Menu из host
const Menu = React.lazy(() => import("host_app/Menu"));

const RemotePage = () => (
  <Suspense fallback={<div>Загрузка меню...</div>}>
    <Menu />
    <div>Это страница remoteApp</div>
  </Suspense>
);

export default RemotePage;