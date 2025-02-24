import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface BtnLinkProps {
    href: string,
    children?: ReactNode,
    className?: string
}

const BtnLink: FunctionComponent<BtnLinkProps> = (props) => {
    return (<Link {...props} href={props.href} className={` ${props.className} rounded-2xl px-6 py-4 font-inter font-bold text-eatly-gray-400 hover:opacity-85`}
    >
        {props.children}
    </Link>);
}
export default BtnLink;