import { clothesImage } from '$modules/Profile/assets';

// TODO replace this on fetching logic
export const useLogic = () => {
  const disclaimerInfo = {
    title: 'Cleaning & domestic help',
    toolsText: [
      'Hoover',
      'Portable mop, wet pads',
      'Cleaning sprays (bleach-based, general, natural options)',
      'Glass cleaner',
      'Microfiber cloths',
    ],
    descriptionText: [
      'Includes cleaning of living spaces or offices; deep cleaning of specific areas',
      'Usually includes surface washing, dusting, tidying, floor cleaning and trash/recycling removal',
      'Scope with a client which tools and supplies to bring',
      'Description text should be added',
    ],
    imageSource: clothesImage,
  };

  return { disclaimerInfo };
};
