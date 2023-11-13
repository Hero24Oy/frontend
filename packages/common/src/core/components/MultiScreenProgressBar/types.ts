import { ScreensForms, Store } from '$core/store';

export type MultiScreenProgressBarProps<Forms extends ScreensForms> = {
  currentStoreValue: Store<Forms>;
  initialStoreState: Forms;
};
