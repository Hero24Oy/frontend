import { AttachmentMime, AttachmentProps, FileType } from '$components/atoms';

export type AttachmentGroupProps = {
  files: FileType[];
  mime: AttachmentMime;
} & Pick<AttachmentProps, 'onDelete'>;
