import { FC } from 'react';
import { Constructor } from '../../../entities/Constructor';
import { ModeSwitcher } from '../../../entities/modeSwitcher';

export const PanelWithActions: FC = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <ModeSwitcher />
      <Constructor></Constructor>
    </div>
  );
};
