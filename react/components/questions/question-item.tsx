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
      className={`${className ? className : ''} flex items-start justify-between border-b border-eatly-gray-800 pb-2 pt-4 leading-[258%] md:pb-3 md:pt-5 lg:pb-4 lg:pt-7`}
      onClick={() => {
        onShow && onShow(question);
      }}
    >
      <div className="max-w-[80%]">
        <p
          className={`font-popins text-xs font-semibold text-eatly-black-600 md:text-base lg:text-2xl ${isShow ? 'mb-1' : 'mb-0'}`}
        >
          <span>{question.question}</span>
        </p>
        <p className={`${isShow ? 'block' : 'hidden'}`}>{question.answer}</p>
      </div>
      <div>
        <span className="ml-10 flex size-4 items-center justify-center rounded-full bg-eatly-violet font-normal text-white md:size-[22px] lg:size-[30px]">
          {isShow ? '-' : '+'}
        </span>
      </div>
    </div>
  );
};

export default QuestionItem;
