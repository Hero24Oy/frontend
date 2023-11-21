import { ImageSource, Item } from '@hero24/ui';

export type UploadDocumentsProps = {
  actionSheetItems: Item[];
  label: string;
  onDeleteFile: () => void;
  source: ImageSource;
  actionsheetTitle?: string;
  isRequired?: boolean;
};
