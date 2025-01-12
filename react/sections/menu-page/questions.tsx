'use client';
import { getQuestions } from '@/backend/api';
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
        <h2 className="mx-auto max-w-[215px] text-center md:max-w-[300px] lg:max-w-[450px]">
          Frequently Asked <span className="text-eatly-violet">Questions</span>
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
