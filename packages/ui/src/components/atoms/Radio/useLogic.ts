export const useLogic = <Value>(value: Value) => {
  const stringifiedValue = JSON.stringify(value);

  return {
    stringifiedValue,
  };
};
