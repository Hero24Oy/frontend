import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type OnChangeEvent = NativeSyntheticEvent<TextInputChangeEventData>;

export type OnChange = ((event: OnChangeEvent) => void) | undefined;
