import { FC } from 'react';
import { useDispatch } from 'react-redux';

import svg_runtime from '../../../shared/assets/eye.svg';
import svg_selector from '../../../shared/assets/selector.svg';
import { modeActions } from '../model/slice/modeSlice';
import { Mode } from '../model/types/modeSchema';

export const ModeSwitcher: FC = () => {
  const dispatch = useDispatch();
  const handleSwitch = (mode: Mode) => {
    dispatch(modeActions.switchMode(mode));
  };

  return (
    <div className="w-[243px] h-[38px] flex gap-1 bg-[#F3F4F6] rounded p-[1px]">
      <input
        type="radio"
        name="mode"
        id="runtime"
        className="peer/runtime hidden"
      />
      <label
        htmlFor="runtime"
        className="flex gap-2 justify-between items-center w-auto cursor-pointer grow text-xm px-3 py-1 peer-checked/runtime:border peer-checked/runtime:border-[#E2E3E5] peer-checked/runtime:bg-white peer-checked/runtime:rounded"
        onClick={() => handleSwitch(Mode.RUNTIME)}
      >
        <img src={svg_runtime} alt="Runtime" className="inline-block" />
        Runtime
      </label>

      <input
        type="radio"
        name="mode"
        id="constructor"
        defaultChecked
        className="peer/constr hidden"
      />
      <label
        htmlFor="constructor"
        className="flex gap-2 justify-between items-center w-auto cursor-pointer grow text-xm px-3 py-1 peer-checked/constr:border peer-checked/constr:border-[#E2E3E5] peer-checked/constr:bg-white peer-checked/constr:rounded"
        onClick={() => handleSwitch(Mode.CONSTRUCTOR)}
      >
        <img src={svg_selector} alt="Selector" className="inline-block" />
        Constructor
      </label>
    </div>
  );
};
