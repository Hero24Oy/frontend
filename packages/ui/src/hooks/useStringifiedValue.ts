type ReturnType = {
  stringifiedValue: string;
};

export const useStringifiedValue = <Type>(value: Type): ReturnType => {
  const stringifiedValue = JSON.stringify(value);

  return {
    stringifiedValue,
  };
};
