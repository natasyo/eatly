import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';

interface LayoutShopProps {
  children: ReactNode;
}

const LayoutShop: FunctionComponent<LayoutShopProps> = ({ children }) => {
  return (
    <div className="container flex py-15">
      <ul className="mr-8 w-[300px] shrink-0 rounded border border-eatly-violet-200">
        <li>
          <Link
            className="block border-b border-eatly-violet-200 p-2 text-lg font-medium"
            href="../../admin/user"
          >
            User
          </Link>
        </li>
        <li>
          <Link
            className="mt-[-1px] block border-b border-eatly-violet-200 p-2 text-lg font-medium"
            href="../../admin/shop"
          >
            Shop
          </Link>
          <ul className="pl-6">
            <li className="border-b border-eatly-violet-200 p-2 font-medium">
              <Link href="../../admin/shop/types">Types</Link>
            </li>
            <li className="border-b border-eatly-violet-200 p-2 font-medium">
              <Link href="../../admin/shop/categories">Categories</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="grow">{children}</div>
    </div>
  );
};

export default LayoutShop;
