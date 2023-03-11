import { ButtonHTMLAttributes, FC } from 'react';

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
  const { theme, children, className, ...otherProps } = props;
  return (
    <button
      type="button"
      {...otherProps}
      className={className ? className : theme}
    >
      {children}
    </button>
  );
};
