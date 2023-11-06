import { FC, useMemo } from 'react';

import { MarksProp, SliderSize } from '../types';

import { Mark } from './Mark';

import { StyledSliderMarksContainer } from '$styled';

const MarksContainer = StyledSliderMarksContainer;

type Props = {
  marks: MarksProp;
  parentWidth: number;
  size?: `${SliderSize}`;
};

export const Marks: FC<Props> = (props: Props) => {
  const { marks, parentWidth, ...restProps } = props;
  const maxIndex = marks.length - 1;
  const markWidth = parentWidth / maxIndex;

  const marksItems = useMemo(
    () =>
      marks.map((mark, index) => (
        <Mark
          key={mark}
          currentIndex={index}
          maxIndex={maxIndex}
          markWidth={markWidth}
        >
          {mark}
        </Mark>
      )),
    [marks, markWidth],
  );

  return <MarksContainer {...restProps}>{marksItems}</MarksContainer>;
};
