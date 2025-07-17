import { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from 'react';

interface TextBoxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  classNameWrap?: string;
  error?: string;
}

const TextBox: FunctionComponent<TextBoxProps> = (props) => {
  return (
    <label className={`mb-5 flex flex-col ${props.classNameWrap ? props.classNameWrap : ''}`}>
      {props.label && (
        <span className="mb-1 text-lg font-medium text-eatly-black-500">{props.label}</span>
      )}
      <input
        {...props}
        // onChange={(e)=>{
        //   if(props.type==='number')
        //     console.log('number')
        //   if(props.onChange) props.onChange(e)
        // }}
        className={`rounded-lg border-eatly-violet-500 p-3 text-lg bg-white-text-eatly-black focus-visible:outline-eatly-violet ${props.className ? props.className : ''}`}
      />
      {props.error && <p className="text-eatly-red-700">{props.error}</p>}
    </label>
  );
};

export default TextBox;
