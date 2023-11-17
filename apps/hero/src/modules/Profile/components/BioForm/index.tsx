import { VStack } from '@gluestack-ui/themed';
import { FC } from 'react';
import { Control, UseFormGetValues, UseFormResetField } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Button, Color, Text, Textarea, View } from '@hero24/ui';

import { LanguagesSelect } from '../LanguagesSelect';

import { textareaPlaceholderMapper } from './constants';
import { Bio } from './types';

import { ProfileType } from '$modules/Profile/stores';

type Props = {
  control: Control<Bio>;
  getValues: UseFormGetValues<Bio>;
  isValid: boolean;
  onChange: () => void;
  profileType: ProfileType;
  resetField: UseFormResetField<Bio>;
};

export const BioForm: FC<Props> = (props) => {
  const { control, isValid, onChange, profileType, ...restProps } = props;

  const placeholder = textareaPlaceholderMapper[profileType];

  // TODO replace text with i18n
  return (
    <VStack style={styles.container}>
      <View style={styles.form}>
        <View style={styles.textarea}>
          <Textarea
            control={control}
            name="info"
            placeholder={placeholder}
            isHelperTextEnabled={false}
          />

          <Text variant="small" style={styles.text}>
            BIO contributes to increasing the level of customer loyalty
          </Text>
        </View>

        <LanguagesSelect control={control} name="languages" {...restProps} />
      </View>

      <Button isDisabled={!isValid} onPress={onChange}>
        Continue
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    gap: 40,
  },
  textarea: {
    gap: 4,
  },
  text: {
    color: Color.DARK_SECONDARY,
  },
});
