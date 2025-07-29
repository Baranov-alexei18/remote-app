import React, { Suspense } from "react";

// лениво импортируем Menu из host
const Menu = React.lazy(() => import("hostApp/Menu"));

const RemotePage = () => (
  <Suspense fallback={<div>Загрузка меню...</div>}>
    <Menu />
    <div>Это страница remoteApp</div>
  </Suspense>
);

export default RemotePage;