import { FunctionComponent, useEffect, useState } from 'react';
import PaginationBtn from './pagination-btn';

interface PaginationProps {
  className?: string;
  count: number;
  current: number;
  onChangeCurrentPage: (nom: number) => void;
}

function createPages(count: number, current = 1) {
  const pages = [];
  if (count <= 10)
    for (let i = 1; i <= count; i++) {
      pages.push(i);
    }
  else {
    pages.push(1);
    if (current - 1 >= 2) pages.push(-1);
    for (let i = current - 2; i <= current + 2; i++) {
      if (i > 1 && i < count) pages.push(i);
    }
    if (count - current > 2) pages.push(-1);
    pages.push(count);
  }

  return pages;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  count,
  current,
  className,
  onChangeCurrentPage,
}) => {
  const [pages, setPages] = useState(createPages(count, current));
  useEffect(() => {
    setPages(createPages(count, current));
  }, [current, count]);

  return (
    <div className={`${className ? className : ''}`}>
      <div className="container">
        <div className="flex items-center justify-center">
          {current - 1 >= 1 && (
            <PaginationBtn
              onClick={() => {
                onChangeCurrentPage(current - 1);
              }}
              isCurrent={false}
            >
              prev
            </PaginationBtn>
          )}

          {pages.map((page, index) => {
            if (page < 1) return <p key={index}>...</p>;
            return (
              <PaginationBtn
                key={index}
                isCurrent={page === current}
                onClick={() => onChangeCurrentPage(page)}
              >
                {page}
              </PaginationBtn>
            );
          })}
          {current + 1 < count && (
            <PaginationBtn
              onClick={() => {
                onChangeCurrentPage(current + 1);
              }}
              isCurrent={false}
            >
              next
            </PaginationBtn>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
