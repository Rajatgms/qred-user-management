export const LOADER_START = 'LOADER_START';
export const LOADER_STOP = 'LOADER_STOP';

export const showLoader = () => {
  return {
    type: LOADER_START,
  };
};

export const hideLoader = () => {
  return {
    type: LOADER_STOP,
  };
};
