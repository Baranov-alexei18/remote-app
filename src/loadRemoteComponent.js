
export const loadRemoteComponent = async ({ remoteName, moduleName }) => {
  const container = window[remoteName];
  if (!container) {
    throw new Error(`Remote ${remoteName} is not loaded`);
  }

  await __webpack_init_sharing__('default');
  await container.init(__webpack_share_scopes__.default);

  const factory = await container.get(moduleName);
  const Module = factory();
  console.log('Module');
  console.log(Module);
  return Module;
};
