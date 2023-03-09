import React from 'react';

export const createReactElement = (element: HTMLElement) => {
  const e = React.createElement('div', element);
  return { e };
};
