import { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from 'react';

interface ColorBoxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  classNameWrap?: string;
}

const ColorBox: FunctionComponent<ColorBoxProps> = (props) => {
  return (
    <label className={`mb-5 flex ${props.classNameWrap ? props.classNameWrap : ''}`}>
      {props.label && (
        <span className="mb-1 mr-3 text-lg font-medium text-eatly-black-500">{props.label}</span>
      )}
      <input {...props} type="color" />
    </label>
  );
};

export default ColorBox;
