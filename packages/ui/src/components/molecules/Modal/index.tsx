import {
  Modal as ModalOrigin,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollView,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Header } from '../Header';

import { ModalProps } from './types';

export const Modal: FC<ModalProps> = (props) => {
  const {
    size = 'full',
    footerButtons,
    bodyContent,
    isOpen,
    ref,
    headerProps,
  } = props;

  return (
    <ModalOrigin size={size} isOpen={isOpen} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent style={styles.contentStyles}>
        <ModalHeader>
          <Header
            title={headerProps.title}
            goBackIcon={headerProps.goBackIcon}
            goBack={headerProps.goBack}
          />
        </ModalHeader>
        <ScrollView>
          <ModalBody style={styles.bodyStyles}>{bodyContent}</ModalBody>
        </ScrollView>
        <ModalFooter style={styles.footerStyles}>{footerButtons}</ModalFooter>
      </ModalContent>
    </ModalOrigin>
  );
};

const styles = StyleSheet.create({
  contentStyles: {
    flex: 1,
  },
  bodyStyles: {
    flex: 4,
  },
  footerStyles: {
    gap: 10,
    justifyContent: 'center',
  },
});
