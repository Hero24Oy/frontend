import { gql } from '@apollo/client';

export type Address = {
  city: string;
  postalCode: string;
  streetAddress: string;
};

export const ADDRESS_FRAGMENT = gql`
  fragment AddressInfo on AddressDto {
    city
    postalCode
    streetAddress
  }
`;
