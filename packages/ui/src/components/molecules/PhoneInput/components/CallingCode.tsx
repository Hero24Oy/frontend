import { Text } from 'components';
import { Menu } from 'components/molecules/Menu';
import { MenuItem } from 'components/molecules/Menu/types';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Country } from 'react-native-country-picker-modal';

import { CALLING_CODE_PREFIX } from '../constants';

import { getCallingCodeTrigger } from './helpers/getCallingCodeTrigger';

interface Props {
  onCodeChange: (callingCode: string) => void;
  country?: Country | null;
}

export const CallingCode: FC<Props> = (props) => {
  const { country, onCodeChange } = props;

  const [selectedCode, setSelectedCode] = useState<string>('');

  const codeWithPrefix = (code?: string): string => {
    return code ? CALLING_CODE_PREFIX.concat(code) : '';
  };

  const setCallingCode = useCallback(
    (callingCode: string): void => {
      setSelectedCode(codeWithPrefix(callingCode));
      onCodeChange(codeWithPrefix(callingCode));
    },
    [onCodeChange],
  );

  useEffect(() => {
    if (country) {
      setCallingCode(country?.callingCode[0]);
    }
  }, [country, setCallingCode]);

  const menuItems = useMemo((): MenuItem[] => {
    if (country && country?.callingCode?.length > 1) {
      return country.callingCode.map((code) => {
        const prefixedCode = codeWithPrefix(code);

        return { key: code, value: prefixedCode, label: prefixedCode };
      });
    }

    return [];
  }, [country]);

  if (!country) {
    return null;
  }

  if (country.callingCode.length <= 1) {
    return <Text>{selectedCode}</Text>;
  }

  return (
    <Menu
      items={menuItems}
      trigger={({ ...triggerProps }): JSX.Element =>
        getCallingCodeTrigger(selectedCode)(
          triggerProps as Record<string, unknown>,
        )
      }
      onSelect={setCallingCode}
    />
  );
};
