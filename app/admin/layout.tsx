"use client"
import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import Loading from '@/react/components/loading';

interface LayoutShopProps {
  children: ReactNode;
}

// export async function getServerSideProps() {
//   const res ='bxnmcbvnxmcbv'
// console.log(res);
//   return {
//     props: { res }
//   }
// }

const LayoutShop: FunctionComponent<LayoutShopProps> = ({ children }) => {
  const {data:session, status}=useSession();
  if(status=='loading'){
    return  <Loading/>
  }
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
        {
         session&&session.user && session.user.role==="ADMIN"&& <li>
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
        }

      </ul>
      <div className="grow">{children}</div>
    </div>
  );
};

export default LayoutShop;
