import NextLink from 'next/link';

export default function LinkPage({children, href, ...props}){
    return(
        <div>
             <NextLink href={href}>
               <div {...props}>{children}</div>
             </NextLink>
        </div>
    )
}