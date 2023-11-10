import { capitalize } from 'core/utils';
import { ComponentProps, useState } from 'react';

import { FullScreenModal } from '@hero24/ui';

import { UseModalReturnValue } from './types';

type Props = Omit<ComponentProps<typeof FullScreenModal>, 'isOpen'>;

export const useModal = <Name extends string>(
  name: Name,
  props: Props,
): UseModalReturnValue<Name> => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modal = <FullScreenModal {...props} isOpen={isModalOpen} />;

  return {
    [`modal${capitalize(name)}`]: modal,
    [`setVisible${capitalize(name)}`]: setIsModalOpen,
  } as UseModalReturnValue<Name>;
};
