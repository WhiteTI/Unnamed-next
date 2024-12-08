'use client'

import {useState} from "react";
import Image from "next/image";
import {Slider} from "@ark-ui/react";

import classes from '@/styles/components/CharacterLevels.module.css'
import baseHP from '@/assets/images/baseHP.svg'
import baseATK from '@/assets/images/atk.svg'
import baseDEF from '@/assets/images/def.svg'

const CharacterLevels = ({levels, color}) => {
    const [level, setLevel] = useState(8)

    return (
        <>
            <div className={`flex items-center gap-x-5 p-4 ${classes.levelBackground}`}>
                <p className='text-xl font-medium'>Level</p>
                <div className={`w-12 h-12 text-xl font-medium flex justify-center items-center ${classes.level}`}>
                    {levels[level - 1].level}
                </div>

                <div className={`flex items-center justify-center ${classes.inputWrapper}`}>
                    <Slider.Root defaultValue={[8]} min={1} max={8} onValueChange={details => setLevel(details.value[0])}>
                        <Slider.Control>
                            <Slider.Track>
                                <Slider.Range style={{backgroundColor: `var(${color})`}}/>
                            </Slider.Track>
                            <Slider.Thumb index={0}></Slider.Thumb>
                        </Slider.Control>
                    </Slider.Root>
                </div>
            </div>

            <div className='flex gap-x-1'>
                <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                    <Image src={baseHP} alt="HP"/>
                    <p className='text-lg font-light ml-1'>Base HP</p>
                    <span className='font-medium text-xl ml-9'>
                            {levels[level - 1].health}
                        </span>
                </div>
                <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                    <Image src={baseATK} alt="ATK"/>
                    <p className='text-lg font-light ml-1'>Base ATK</p>
                    <span className='font-medium text-xl ml-9'>
                            {levels[level - 1].attack}
                        </span>
                </div>
                <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                    <Image src={baseDEF} alt="DEF"/>
                    <p className='text-lg font-light ml-1'>Base DEF</p>
                    <span className='font-medium text-xl ml-9'>
                            {levels[level - 1].defense}
                        </span>
                </div>
                <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                    <img src={levels[level - 1].additionalStat[0]} alt={levels[level - 1].additionalStat[1]}/>
                    <p className='text-lg font-light ml-1'>
                        {levels[level - 1].additionalStat[1]}
                    </p>
                    <span className='font-medium text-xl ml-9'>
                            {levels[level - 1].additionalStat[2]}
                        </span>
                </div>
            </div>
        </>
    );
};

export default CharacterLevels;