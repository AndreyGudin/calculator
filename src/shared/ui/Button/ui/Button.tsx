import { ButtonHTMLAttributes, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMode } from '../../../../entities/modeSwitcher';
import { getCurrentOperation } from '../model/selectors/getCurrentOperation/getCurrentOperation';
import { getResult } from '../model/selectors/getResult/getResult';
import { getValues } from '../model/selectors/getValue/getValue';
import { calculatorActions } from '../model/slice/calculatorSlice';

export enum ThemeButton {
  NUMBER = 'w-[72px] h-[48px] border border-[#E2E3E5] block uppercase shadow bg-white hover:bg-slate-50 focus:shadow-outline focus:outline-none text-black text-xm rounded',
  OPERATION = 'w-[52px] h-[48px] border border-[#E2E3E5] block uppercase shadow bg-white hover:bg-slate-50 focus:shadow-outline focus:outline-none text-black text-xm rounded',
  BIG = 'w-[232px] h-[64px] block uppercase shadow bg-[#5D5FEF] hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xm rounded',
  NUMBERx2 = 'w-[152px] h-[48px] border border-[#E2E3E5] block uppercase shadow bg-white hover:bg-slate-50 focus:shadow-outline focus:outline-none text-black text-xm rounded'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
  className?: string;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const currentMode = useSelector(getCurrentMode);
  const currentOperation = useSelector(getCurrentOperation);
  const result = useSelector(getResult);
  let { value1, value2 } = useSelector(getValues);
  const dispatch = useDispatch();
  const { theme, children, className, ...otherProps } = props;

  const handlerOnClick = () => {
    if (currentMode === 'runtime' && typeof children === 'string') {
      switch (className) {
        case ThemeButton.NUMBER:
        case ThemeButton.NUMBERx2:
          value1 = value1 === null ? '' : value1;
          value1 += children;
          console.log(value1);
          dispatch(calculatorActions.saveValue1(value1));
          dispatch(calculatorActions.printResult(value1));
          break;
        case ThemeButton.OPERATION:
          dispatch(calculatorActions.pressOperationButton(children));
          dispatch(calculatorActions.saveValue2(result));
          dispatch(calculatorActions.printResult(children));
          dispatch(calculatorActions.saveValue1(null));
          break;
        case ThemeButton.BIG:
          switch (currentOperation) {
            case '+':
              if (value1 && value2)
                dispatch(
                  calculatorActions.printResult((+value2 + +value1).toString())
                );
              dispatch(calculatorActions.clearValues());
              break;
            case 'X':
              if (value1 && value2)
                dispatch(
                  calculatorActions.printResult((+value2 * +value1).toString())
                );
              dispatch(calculatorActions.clearValues());
              break;
            case '/':
              if (value1 && value2)
                dispatch(
                  calculatorActions.printResult((+value2 / +value1).toString())
                );
              dispatch(calculatorActions.clearValues());
              break;
            case '-':
              if (value1 && value2)
                dispatch(
                  calculatorActions.printResult((+value2 - +value1).toString())
                );
              dispatch(calculatorActions.clearValues());
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <button
      onClick={handlerOnClick}
      type="button"
      {...otherProps}
      className={className ? className : theme}
    >
      {children}
    </button>
  );
};
