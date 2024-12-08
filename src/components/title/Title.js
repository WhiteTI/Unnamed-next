'use client'

import {usePathname} from "next/navigation";

const Title = () => {
    const pathname = usePathname()
    const title = pathname.slice(1)

    return (
        <h1 className='font-bold uppercase' style={{fontSize: '60px'}}>{title} List</h1>
    );
};

export default Title;