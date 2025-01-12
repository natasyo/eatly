import { Question } from '@/types';
import { FunctionComponent } from 'react';

interface QuestionItemProps {
  className?: string;
  question: Question;
  isShow?: boolean;
  onShow?: (question: Question) => void;
}

const QuestionItem: FunctionComponent<QuestionItemProps> = ({
  question,
  className,
  isShow,
  onShow,
}) => {
  return (
    <div
      className={`${className ? className : ''} border-b border-eatly-gray-800 leading-[258%] lg:pb-4 lg:pt-7`}
    >
      <p
        className="flex items-center justify-between font-popins text-xs font-semibold text-eatly-black-600 md:text-base lg:text-2xl"
        onClick={() => {
          onShow && onShow(question);
        }}
      >
        <span>{question.question}</span>
        <span className="ml-10 flex size-4 items-center justify-center rounded-full bg-eatly-violet font-normal text-white md:size-[22px] lg:size-[30px]">
          {isShow ? '-' : '+'}
        </span>
      </p>
      <p className={`${isShow ? 'block' : 'hidden'}`}>{question.answer}</p>
    </div>
  );
};

export default QuestionItem;
