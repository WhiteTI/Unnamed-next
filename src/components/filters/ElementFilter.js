'use client'

import {useState} from "react";
import {usePathname} from "next/navigation";
import classes from '@/styles/components/filters/ElementFilter.module.css'
import pyro from '@/assets/images/pyro.svg'
import hydro from '@/assets/images/gidro.svg'
import anemo from '@/assets/images/anemo.svg'
import electro from '@/assets/images/electro.svg'
import dendro from '@/assets/images/dendro.svg'
import cryo from '@/assets/images/cryo.svg'
import geo from '@/assets/images/geo.svg'
import Image from "next/image";


const ElementFilter = ({grid}) => {
    const path = usePathname()
    const show = path === '/characters'

    const [elements, setElements] = useState([])

    const elementsList = [
        {elem: 'pyro', img: pyro},
        {elem: 'hydro', img: hydro},
        {elem: 'anemo', img: anemo},
        {elem: 'electro', img: electro},
        {elem: 'dendro', img: dendro},
        {elem: 'cryo', img: cryo},
        {elem: 'geo', img: geo}
    ]

    const toggleElement = (elem) => {
        if (elements.includes(elem)) {
            setElements(state => state.filter(item => item !== elem))
        } else {
            setElements(state => [...state, elem])
        }
    }

    return show && (
        <div className={`${grid} flex gap-x-4`}>
            {elementsList.map(({elem, img}) => (
                <button key={elem} className={classes.elementBtn}
                        data-active={!elements.length ? 'default' : elements.includes(elem) ? 'true' : 'false'}
                        onClick={() => toggleElement(elem)}
                >
                    <Image src={img} alt={elem}/>
                </button>
            ))}
        </div>
    );
};

export default ElementFilter;