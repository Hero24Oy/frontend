import {
  Modal as GluestackModal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ScrollView,
} from '@gluestack-ui/themed';
import { ComponentProps, FC, RefObject } from 'react';
import { StyleSheet } from 'react-native';

import { Header } from '../Header';

import { JsxElement } from '$types';

export type Props = {
  header: ComponentProps<typeof Header>;
  isOpen: boolean;
  ref: RefObject<JsxElement>;
  body?: JsxElement;
  footer?: JsxElement;
};

export const FullScreenModal: FC<Props> = (props) => {
  const { footer, body, isOpen, ref, header } = props;

  return (
    <GluestackModal size="full" isOpen={isOpen} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent style={styles.content}>
        <Header {...header} />
        <ScrollView>
          <ModalBody>{body}</ModalBody>
        </ScrollView>
        <ModalFooter style={styles.footer}>{footer}</ModalFooter>
      </ModalContent>
    </GluestackModal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  footer: {
    gap: 16,
    paddingBottom: 33,
  },
});
