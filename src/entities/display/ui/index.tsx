import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getResult } from '../../../shared/ui/Button/model/selectors/getResult/getResult';
import { getCurrentMode } from '../../modeSwitcher';

interface DisplayProps {
  text: string;
}

export const Display: FC<DisplayProps> = ({ text }: DisplayProps) => {
  const result = useSelector(getResult);
  const currentMode = useSelector(getCurrentMode);
  const textToDisplay = result === null ? '0' : result;
  return (
    <div className="w-full h-[52px] bg-[#F3F4F6] text-4xl font-extrabold text-right py-1 px-2 rounded">
      <span>
        {currentMode === 'runtime' ? textToDisplay.substring(0, 10) : text}
      </span>
    </div>
  );
};
