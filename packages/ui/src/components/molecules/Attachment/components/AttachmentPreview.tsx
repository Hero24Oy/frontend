import { Icon, View as GluestackView } from '@gluestack-ui/themed';
import { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentFile, AttachmentMime } from '../types';

import { Image } from '$atoms';
import { FileIcon } from '$icons';
import { Color } from '$theme';

type Props = AttachmentFile;

export const AttachmentPreview: FC<Props> = (props) => {
  const { mime, src } = props;

  const content = useMemo(() => {
    if (mime === AttachmentMime.PDF) {
      return <Icon as={FileIcon} />;
    }

    return <Image source={src} size="FULL" />;
  }, [mime]);

  return <GluestackView style={styles.view}>{content}</GluestackView>;
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.GREY_LIGHT_00,
    borderWidth: 1,
    borderRadius: 6,
    width: 40,
    height: 40,
    padding: 3.33,
  },
});
