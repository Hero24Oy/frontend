import { FC, useMemo } from 'react';

import { MarkItems, SliderSize } from '../types';

import { Mark } from './components';

import { StyledSliderMarksContainer } from '$styled';

export const MarksContainer = StyledSliderMarksContainer;

type Props = {
  marks: MarkItems;
  parentWidth: number;
  size?: `${SliderSize}`;
};

export const Marks: FC<Props> = (props: Props) => {
  const { marks, parentWidth, ...restProps } = props;

  const markWidth = useMemo(
    () => parentWidth / (marks.length - 1),
    [parentWidth, marks.length],
  );

  return (
    <MarksContainer {...restProps}>
      {marks.map((mark, index) => {
        return (
          <Mark
            key={mark.label}
            currentIndex={index}
            totalCount={marks.length - 1}
            markWidth={markWidth}
          >
            {mark.label}
          </Mark>
        );
      })}
    </MarksContainer>
  );
};
