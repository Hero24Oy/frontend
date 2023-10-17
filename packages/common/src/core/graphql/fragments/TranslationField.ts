import { gql } from '@apollo/client';
import { Label } from 'hero24-types';

export type TranslationField = Label;

export const TRANSLATION_FIELD_FRAGMENT = gql`
  fragment TranslationFieldFragment on TranslationFieldDto {
    en
    fi
  }
`;
