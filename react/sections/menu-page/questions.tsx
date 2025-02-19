'use client';
import { getQuestions } from '@/controllers/api';
import QuestionItem from '@/react/components/questions/question-item';
import { Question } from '@/types';
import { FunctionComponent, useState } from 'react';

interface QuestionsProps {
  className?: string;
}

const Questions: FunctionComponent<QuestionsProps> = ({ className }) => {
  const questions = getQuestions();
  const [activeQuestion, setActiveQuestion] = useState<Question | undefined>();
  return (
    <div className={`${className ? className : ''} pb-[100px] pt-[140px]`}>
      <div className="container">
        <h2 className="relative mx-auto max-w-[215px] text-center md:max-w-[300px] lg:max-w-[468px]">
          Frequently Asked <span className="text-eatly-violet">Questions</span>
          <span className="absolute bottom-full left-full">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49941 2C5.89281 6.09255 3.74387 10.4404 1.32031 14.6407"
                stroke="#6C5FBC"
                strokeWidth="2.51268"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.4222 2C15.2822 6.82781 9.55361 12.4264 4.19238 18.1521"
                stroke="#6C5FBC"
                strokeWidth="2.51268"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.8596 15.3433C17.8486 16.2522 11.1897 20.0272 6.34766 22.3659"
                stroke="#6C5FBC"
                strokeWidth="2.51268"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </h2>
        {questions.map((question) => {
          return (
            <QuestionItem
              question={question}
              key={question.id}
              isShow={activeQuestion?.id === question.id}
              onShow={(question) => {
                setActiveQuestion(question);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
