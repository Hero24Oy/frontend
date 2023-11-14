export enum SettingsDictionaryKeys {
  ENGLISH = 'en',
  FINNISH = 'fi',
}

export type Settings = {
  langs: Record<SettingsDictionaryKeys, string[]>;
  workareas: Record<SettingsDictionaryKeys, string[]>;
};
