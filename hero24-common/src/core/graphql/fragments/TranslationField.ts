import { gql } from '@apollo/client';
import { Label } from 'hero24-types';

// TODO rename label to TranslationField
export type TranslationField = Label;

export const TRANSLATION_FIELD_FRAGMENT = gql`
  fragment TranslationFieldFragment on TranslationFieldDto {
    en
    fi
  }
`;
