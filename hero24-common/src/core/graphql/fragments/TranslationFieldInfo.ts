import { gql } from '@apollo/client';

export type TranslationField = {
  en: string;
  fi: string;
};

export const TRANSLATION_FIELD_FRAGMENT = gql`
  fragment TranslationFieldFragment on TranslationFieldDto {
    en
    fi
  }
`;
