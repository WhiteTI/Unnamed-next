'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import classes from "@/styles/components/SingleCharacterMenu.module.css";

const SingleCharacterMenu = ({activeStyle}) => {
    const path = usePathname()

    const links = [
        {path: 'overview', text: 'Overview'},
        {path: 'builds', text: 'Builds'},
        {path: 'constellation', text: 'Constellation'},
        {path: 'teams', text: 'Teams'},
        {path: 'gallery', text: 'Gallery'},
    ]

    return (
        <nav className={`z-10 flex flex-col ${classes.menu}`}>
            {
                links.map(link => (
                    <Link href={link.path} key={link.path} style={path.split('/').at(-1) === link.path ? activeStyle : null}>
                        {link.text}
                    </Link>
                ))
            }
        </nav>
    );
};

export default SingleCharacterMenu;