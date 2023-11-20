import { ReactNode } from "react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const fakeWait = (ms: number) => {
    console.log('This should never run statically');
    return new Promise(resolve => setTimeout(resolve, ms))
};

export default async function Layout({children}: {
    children: ReactNode
}){
    await fakeWait(1000);
    return <>{children}</>
}