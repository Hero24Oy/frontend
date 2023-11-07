import OnestMediumPath from './Onest-Medium.ttf';
import OnestRegularPath from './Onest-Regular.ttf';
import OnestSemiBoldPath from './Onest-SemiBold.ttf';

// * We need create different fonts for weights because of React Native limitations.
// * More info could be found here: https://github.com/expo/expo/issues/9149

export const Onest400: string = require(OnestRegularPath);
export const Onest500: string = require(OnestMediumPath);
export const Onest600: string = require(OnestSemiBoldPath);
