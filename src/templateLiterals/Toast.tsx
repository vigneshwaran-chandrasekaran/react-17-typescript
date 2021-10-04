import React from 'react';

/**
 * Position prop can be one of
 * '"left-center" | "left-top" | "left-bottom" | "center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'right' | 'center';
type VerticalPosition = 'top' | 'bottom' | 'center';

type ToastProps = {
  position:
    | 'center'
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>;
};

export default function Toast({ position }: ToastProps) {
  return <div>Toast Notification Position - {position}</div>;
}
