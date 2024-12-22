import { FunctionComponent } from 'react';

interface StarsProps {
  count?: number;
}

const Stars: FunctionComponent<StarsProps> = () => {
  return (
    <div className="flex items-center">
      <span className="ml-5 mr-1 flex">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91519 0.741543C8.23645 -0.247181 9.63523 -0.247181 9.95649 0.741543L11.1043 4.2742C11.248 4.71637 11.66 5.01575 12.125 5.01575H15.8394C16.879 5.01575 17.3113 6.34607 16.4702 6.95713L13.4652 9.14044C13.089 9.41371 12.9316 9.89811 13.0753 10.3403L14.2231 13.8729C14.5444 14.8617 13.4128 15.6838 12.5717 15.0728L9.56663 12.8895C9.1905 12.6162 8.68118 12.6162 8.30504 12.8895L5.29998 15.0728C4.45893 15.6838 3.32729 14.8617 3.64855 13.8729L4.79638 10.3403C4.94005 9.89811 4.78266 9.41371 4.40652 9.14044L1.40146 6.95713C0.560407 6.34607 0.992654 5.01575 2.03226 5.01575H5.74672C6.21164 5.01575 6.62369 4.71637 6.76736 4.2742L7.91519 0.741543Z"
            fill="#F59E0B"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91519 0.741543C8.23645 -0.247181 9.63523 -0.247181 9.95649 0.741543L11.1043 4.2742C11.248 4.71637 11.66 5.01575 12.125 5.01575H15.8394C16.879 5.01575 17.3113 6.34607 16.4702 6.95713L13.4652 9.14044C13.089 9.41371 12.9316 9.89811 13.0753 10.3403L14.2231 13.8729C14.5444 14.8617 13.4128 15.6838 12.5717 15.0728L9.56663 12.8895C9.1905 12.6162 8.68118 12.6162 8.30504 12.8895L5.29998 15.0728C4.45893 15.6838 3.32729 14.8617 3.64855 13.8729L4.79638 10.3403C4.94005 9.89811 4.78266 9.41371 4.40652 9.14044L1.40146 6.95713C0.560407 6.34607 0.992654 5.01575 2.03226 5.01575H5.74672C6.21164 5.01575 6.62369 4.71637 6.76736 4.2742L7.91519 0.741543Z"
            fill="#F59E0B"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91519 0.741543C8.23645 -0.247181 9.63523 -0.247181 9.95649 0.741543L11.1043 4.2742C11.248 4.71637 11.66 5.01575 12.125 5.01575H15.8394C16.879 5.01575 17.3113 6.34607 16.4702 6.95713L13.4652 9.14044C13.089 9.41371 12.9316 9.89811 13.0753 10.3403L14.2231 13.8729C14.5444 14.8617 13.4128 15.6838 12.5717 15.0728L9.56663 12.8895C9.1905 12.6162 8.68118 12.6162 8.30504 12.8895L5.29998 15.0728C4.45893 15.6838 3.32729 14.8617 3.64855 13.8729L4.79638 10.3403C4.94005 9.89811 4.78266 9.41371 4.40652 9.14044L1.40146 6.95713C0.560407 6.34607 0.992654 5.01575 2.03226 5.01575H5.74672C6.21164 5.01575 6.62369 4.71637 6.76736 4.2742L7.91519 0.741543Z"
            fill="#F59E0B"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91519 0.741543C8.23645 -0.247181 9.63523 -0.247181 9.95649 0.741543L11.1043 4.2742C11.248 4.71637 11.66 5.01575 12.125 5.01575H15.8394C16.879 5.01575 17.3113 6.34607 16.4702 6.95713L13.4652 9.14044C13.089 9.41371 12.9316 9.89811 13.0753 10.3403L14.2231 13.8729C14.5444 14.8617 13.4128 15.6838 12.5717 15.0728L9.56663 12.8895C9.1905 12.6162 8.68118 12.6162 8.30504 12.8895L5.29998 15.0728C4.45893 15.6838 3.32729 14.8617 3.64855 13.8729L4.79638 10.3403C4.94005 9.89811 4.78266 9.41371 4.40652 9.14044L1.40146 6.95713C0.560407 6.34607 0.992654 5.01575 2.03226 5.01575H5.74672C6.21164 5.01575 6.62369 4.71637 6.76736 4.2742L7.91519 0.741543Z"
            fill="#F59E0B"
          />
        </svg>
      </span>
      <span className="text-blue-gray opacity-70">4900+</span>
    </div>
  );
};

export default Stars;
