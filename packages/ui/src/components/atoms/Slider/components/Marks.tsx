import { FC } from 'react';

import { MarksProp, SliderSize } from '../types';

import { Mark } from './components';

import { StyledSliderMarksContainer } from '$styled';

export const MarksContainer = StyledSliderMarksContainer;

type Props = {
  marks: MarksProp;
  parentWidth: number;
  size?: `${SliderSize}`;
};

export const Marks: FC<Props> = (props: Props) => {
  const { marks, parentWidth, ...restProps } = props;

  const markWidth = parentWidth / (marks.length - 1);

  return (
    <MarksContainer {...restProps}>
      {marks.map((mark, index) => {
        return (
          <Mark
            key={mark}
            currentIndex={index}
            maxIndex={marks.length - 1}
            markWidth={markWidth}
          >
            {mark}
          </Mark>
        );
      })}
    </MarksContainer>
  );
};
