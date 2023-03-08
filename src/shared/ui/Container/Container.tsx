import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-wrap gap-2 max-w-[240px] h-[60px] bg-white p-1 shadow-md shadow-slate-400">
      {children}
    </div>
  );
};
