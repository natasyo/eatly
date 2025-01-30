import { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from 'react';

interface TextBoxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  classNameWrap?: string;
}

const TextBox: FunctionComponent<TextBoxProps> = (props) => {
  return (
    <label className={`mb-5 flex flex-col ${props.classNameWrap ? props.classNameWrap : ''}`}>
      {props.label && (
        <span className="mb-1 text-lg font-medium text-eatly-black-500">{props.label}</span>
      )}
      <input
        {...props}
        type="text"
        className={`rounded-lg border-eatly-violet-500 p-3 text-lg text-eatly-black focus-visible:outline-eatly-violet ${props.className ? props.className : ''}`}
      />
    </label>
  );
};

export default TextBox;
