import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getResult } from '../../../shared/ui/Button';
import { getCurrentMode } from '../../modeSwitcher';

interface DisplayProps {
  text: string;
}

export const Display: FC<DisplayProps> = ({ text }: DisplayProps) => {
  const result = useSelector(getResult);
  const currentMode = useSelector(getCurrentMode);
  const fontSize = result.length > 10 ? 'text-2xl' : 'text-4xl';
  return (
    <div
      className={`w-full h-[52px] bg-[#F3F4F6] ${fontSize} font-extrabold text-right py-1 px-2 rounded`}
    >
      <span>{currentMode === 'runtime' ? result : text}</span>
    </div>
  );
};
