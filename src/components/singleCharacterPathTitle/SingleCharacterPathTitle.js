'use client'

import {usePathname} from "next/navigation";
import classes from '@//styles/components/SingleCharacterPathTitle.module.css'

const SingleCharacterPathTitle = ({color, secondColor}) => {
    const path = usePathname()
    const location = path.split('/').at(-1)

    return (
        <h2 className={classes.titleBlock} style={{
            color: `var(${color})`,
            borderBottom: `1px solid var(${color})`,
            background: `linear-gradient(90.00deg, color(from var(${secondColor}) srgb r g b / 0.78) 0%,rgba(0, 0, 0, 0) 50.929%),linear-gradient(270.00deg, rgb(31, 31, 39) 4.079%,rgba(31, 31, 39, 0.32) 74.152%)`
        }}>
            {location.toUpperCase()}
        </h2>
    );
};

export default SingleCharacterPathTitle;