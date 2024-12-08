'use client'

import {useState} from "react";
import {usePathname} from "next/navigation";
import Image from "next/image";
import classes from '@/styles/components/filters/RarityFilter.module.css'
import fiveStar from '@/assets/images/5star.svg'
import fourStar from '@/assets/images/4star.svg'
import threeStar from '@/assets/images/3star.svg'

const RarityFilter = ({grid}) => {
    const [rarityFilter, setRarityFilter] = useState({characters: [], weapons: [], artifacts: []})
    const path = usePathname()

    const stars = path === '/characters'
        ? [
            {rar: 5, img: fiveStar},
            {rar: 4, img: fourStar},
        ]
        : [
            {rar: 5, img: fiveStar},
            {rar: 4, img: fourStar},
            {rar: 3, img: threeStar},
        ]

    const toggleRarity = (rar) => {
        if (rarityFilter[path.slice(1)].includes(rar)) {
            setRarityFilter(state => ({...state, [path.slice(1)]: state[path.slice(1)].filter(item => item !== rar)}))
        } else {
            setRarityFilter(state => ({...state, [path.slice(1)]: [...state[path.slice(1)], rar]}))
        }
    }

    return (
        <div className={`${grid} flex gap-x-4`}>
            {stars.map(({rar, img}) => (
                <button
                    key={rar}
                    className={`flex items-center justify-center ${classes.rarityBtn}`}
                    data-active={!rarityFilter[path.slice(1)].length ? 'default' : rarityFilter[path.slice(1)].includes(rar) ? 'true' : 'false'}
                    onClick={() => toggleRarity(rar)}
                >
                    <Image src={img} alt={`${rar} Star`}/>
                </button>
            ))}
        </div>
    );
};

export default RarityFilter;