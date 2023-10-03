import { gql } from '@apollo/client';
import { Address as AddressDB } from 'hero24-types';

import { ADDRESS_FRAGMENT } from '../../../Offers/graphql/fragments';

export type UserDataAddress = {
  address: AddressDB;
  key: string;
};

export const USER_DATA_ADDRESS_FRAGMENT = gql`
  ${ADDRESS_FRAGMENT}

  fragment UserDataAddressInfo on UserDataAddressDto {
    address {
      ...AddressInfo
    }
    key
  }
`;
