import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2 box-border max-w-[240px] bg-white p-1 shadow-md shadow-slate-400 rounded">
      {children}
    </div>
  );
};
