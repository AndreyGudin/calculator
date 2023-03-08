import { FC } from 'react';

import svg_constructor from '../../../shared/assets/place.svg';

export const Constructor: FC = () => {
  return (
    <div className="flex flex-col gap-3 w-[243px] h-[448px] border-2 border-dashed rounded justify-center items-center">
      <img src={svg_constructor} alt="Place there" />
      <div className="flex flex-col items-center">
        <span className="text-sm text-[#5D5FEF] ">Перетащите сюда</span>
        <span className="inline-block w-[106px] text-xs text-center">
          любой&nbsp;элемент из&nbsp;левой&nbsp;панели
        </span>
      </div>
    </div>
  );
};
