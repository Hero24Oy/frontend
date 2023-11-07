import { useFonts } from 'expo-font';

import * as fonts from '$common/assets/fonts';

type UseLoadFontsReturnType = {
  areFontsLoaded: boolean;
};

export const useLoadFonts = (): UseLoadFontsReturnType => {
  const [areFontsLoaded, fontsLoadingErrors] = useFonts(fonts);

  if (fontsLoadingErrors) {
    console.error(fontsLoadingErrors);
  }

  return {
    areFontsLoaded,
  };
};
