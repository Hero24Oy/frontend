import { AttachmentType, FileType } from '$components/atoms';

export type AttachmentGroupProps = {
  files: FileType[];
  onDelete: (id: number) => void;
  type: `${AttachmentType}`;
};
