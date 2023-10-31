import { FC, memo } from 'react';

import { radioComponent } from './constants';

import { RadioOption, RadioVariant } from '$atoms/RadioGroup';

type Props = {
  options: RadioOption[];
  variant: RadioVariant;
};

export const Radios: FC<Props> = memo((props) => {
  const { options, variant } = props;

  const Component = radioComponent[variant];

  return options.map(({ value, label }) => (
    <Component key={label} value={value}>
      {label}
    </Component>
  ));
});
