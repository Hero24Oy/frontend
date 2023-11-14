export enum SettingsDictionaryKeys {
  ENGLISH = 'en',
  FINNISH = 'fi',
}

export type SettingsDictionary = {
  [SettingsDictionaryKeys.ENGLISH]: string[];
  [SettingsDictionaryKeys.FINNISH]: string[];
};
