import {
  Modal as GluestackModal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ScrollView,
} from '@gluestack-ui/themed';
import { ComponentProps, FC } from 'react';
import { StyleSheet } from 'react-native';

import { Header } from '../Header';

import { Color } from '$theme';
import { JsxElement } from '$types';

export type Props = {
  header: ComponentProps<typeof Header>;
  isOpen: boolean;
  body?: JsxElement;
  footer?: JsxElement;
};

export const FullScreenModal: FC<Props> = (props) => {
  const { footer, body, isOpen, header } = props;

  return (
    <GluestackModal size="full" isOpen={isOpen}>
      <ModalBackdrop />
      <ModalContent style={styles.content}>
        <Header {...header} />
        <ScrollView>
          <ModalBody style={styles.body}>{body}</ModalBody>
        </ScrollView>
        <ModalFooter style={styles.footer}>{footer}</ModalFooter>
      </ModalContent>
    </GluestackModal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Color.WHITE_00,
  },
  footer: {
    gap: 16,
    paddingBottom: 33,
  },
  body: {
    paddingHorizontal: 0,
  },
});
