import { FC } from 'react';

import svg_runtime from '../../../shared/assets/eye.svg';
import svg_selector from '../../../shared/assets/selector.svg';

export const ModeSwitcher: FC = () => {
  return (
    <div className="w-[243px] h-[38px] flex gap-1 bg-[#F3F4F6] rounded">
      <input
        type="radio"
        name="mode"
        id="runtime"
        className="peer/runtime hidden"
      />
      <label
        htmlFor="runtime"
        className="flex gap-2 justify-between items-center w-auto cursor-pointer grow text-xm px-3 py-1 peer-checked/runtime:border peer-checked/runtime:border-[#E2E3E5] peer-checked/runtime:bg-white peer-checked/runtime:rounded"
      >
        <img src={svg_runtime} alt="Runtime" className="inline-block" />
        Runtime
      </label>

      <input
        type="radio"
        name="mode"
        id="constructor"
        checked
        className="peer/constr hidden"
      />
      <label
        htmlFor="constructor"
        className="flex gap-2 justify-between items-center w-auto cursor-pointer grow text-xm px-3 py-1 peer-checked/constr:border peer-checked/constr:border-[#E2E3E5] peer-checked/constr:bg-white peer-checked/constr:rounded"
      >
        <img src={svg_selector} alt="Selector" className="inline-block" />
        Constructor
      </label>
    </div>
  );
};
