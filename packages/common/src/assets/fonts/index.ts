import OnestMediumPath from './Onest-Medium.ttf';
import OnestRegularPath from './Onest-Regular.ttf';
import OnestSemiBoldPath from './Onest-SemiBold.ttf';

// * We need create different fonts for weights because of React Native limitations.
// * More info could be found here: https://github.com/expo/expo/issues/9149

export const Onest400: number = require(OnestRegularPath);
export const Onest500: number = require(OnestMediumPath);
export const Onest600: number = require(OnestSemiBoldPath);
