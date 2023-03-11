import { useDroppable } from '@dnd-kit/core';
import { DragEvent, FC } from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider';
import { v4 as uuidv4 } from 'uuid';

import svg_constructor from '../../../shared/assets/place.svg';
import { Container } from '../../../shared/ui/Container/Container';
import { Button } from '../../../shared/ui/Button/Button';
import { Display } from '../../display/ui';

export const Constructor: FC = () => {
  const droppedElements = useSelector(
    (state: StateSchema) => state.elements.value
  );
  const isDropped = useSelector((state: StateSchema) => state.elements.dropped);
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable1'
  });
  const style = {
    backgroundColor: isOver ? 'green' : undefined
  };
  console.log('elements', droppedElements);
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-col gap-3 w-[270px] h-[448px] border-2 border-dashed rounded justify-center items-center"
    >
      {isDropped ? null : (
        <>
          <img src={svg_constructor} alt="Place there" />
          <div className="flex flex-col items-center">
            <span className="text-sm text-[#5D5FEF] ">Перетащите сюда</span>
            <span className="inline-block w-[106px] text-xs text-center">
              любой&nbsp;элемент из&nbsp;левой&nbsp;панели
            </span>
          </div>
        </>
      )}
      {droppedElements.map((element) => {
        return (
          <Container id={uuidv4()} key={uuidv4()}>
            {element.elem.map((e) => {
              let component = null;
              console.log('e.type', e.type);
              if (e.type === 'button')
                component = (
                  <Button className={e.theme} key={uuidv4()}>
                    {e.text}
                  </Button>
                );
              if (e.type === 'display')
                component = <Display text={e.text} key={uuidv4()} />;
              return component;
            })}
          </Container>
        );
      })}
    </div>
  );
};
