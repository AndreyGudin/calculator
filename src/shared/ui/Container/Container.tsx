import { BaseHTMLAttributes, FC } from 'react';

export const Container: FC<BaseHTMLAttributes<HTMLDivElement>> = (
  props: BaseHTMLAttributes<HTMLDivElement>
) => {
  const { children, ...otherProps } = props;
  return (
    <div
      draggable
      className="flex flex-wrap items-center gap-2 box-border max-w-[240px] bg-white p-1 shadow-md shadow-slate-400 rounded"
      {...otherProps}
    >
      {children}
    </div>
  );
};
