import { Size, SizeKeys } from '$theme';

export type BadgeSize = Extract<Size, 'sm' | 'md'>;

type Keys = Extract<SizeKeys, 'XXS' | 'XS'>;

export const BadgeIconSize: Record<Keys, number> = {
  XXS: 12,
  XS: 14,
};

export enum BadgeAction {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
  INFO = 'info',
  MUTED = 'muted',
}

export enum BadgeVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
}

export enum IconPosition {
  RIGHT = 'right',
  LEFT = 'left',
}
