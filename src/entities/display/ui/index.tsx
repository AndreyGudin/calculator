import { FC } from 'react';

interface DisplayProps {
  text: string;
}

export const Display: FC<DisplayProps> = ({ text }: DisplayProps) => {
  return (
    <div className="w-full h-[52px] bg-[#F3F4F6] text-4xl font-extrabold text-right py-1 px-2 rounded">
      <span>{text}</span>
    </div>
  );
};
