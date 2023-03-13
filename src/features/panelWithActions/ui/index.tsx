import { FC } from 'react';
import { Constructor } from '../../../entities/constructor/ui';
import { ModeSwitcher } from '../../../entities/modeSwitcher/ui';

export const PanelWithActions: FC = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <ModeSwitcher />
      <Constructor></Constructor>
    </div>
  );
};
