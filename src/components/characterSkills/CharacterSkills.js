'use client'

import {useState} from "react";
import {Slider} from "@ark-ui/react";
import classes from '@/styles/components/CharacterSkills.module.css'

const CharacterSkills = ({skills, color}) => {
    const [activeSkill, setActiveSkill] = useState(skills[0])

    return (
        <>
            <div className='flex gap-x-10'>
                {skills.map(skill => (
                    <button key={skill.id} onClick={() => setActiveSkill(skill)}>
                        <img src={skill.image} alt={skill.name} className={classes.skillImage}
                            style={{border: skill.id === activeSkill.id ? `2px solid var(${color})` : ''}}
                        />
                    </button>
                ))}
            </div>

            <hr className='my-6'/>

            {skills.map(skill => (
                <div key={skill.id}
                     className={`flex gap-x-14 ${classes.skillInfoWrapper}`}
                     style={{display: activeSkill.id === skill.id ? 'flex' : 'none'}}
                >
                    <SkillInfo skill={skill} color={color}/>
                </div>
            ))}
        </>
    );
};

const SkillInfo = ({skill, color}) => {
    const [skillLevel, setSkillLevel] = useState(9)

    return (
        <>
            <div className='w-6/12 overflow-auto pr-4'>
                {skill.description}
            </div>

            <div className='w-6/12 overflow-auto'>
                <div className='flex items-center gap-x-5 mb-2'>
                    <p className='text-xl font-medium'>Level</p>
                    <div className={`w-12 h-12 text-xl font-medium flex justify-center items-center ${classes.level}`}>
                        {skillLevel}
                    </div>

                    <div className={`flex items-center justify-center ${classes.inputWrapper}`}>
                        <Slider.Root defaultValue={[9]} min={1} max={15}
                                     onValueChange={details => setSkillLevel(details.value[0])}>
                            <Slider.Control>
                                <Slider.Track>
                                    <Slider.Range style={{backgroundColor: `var(${color})`}}/>
                                </Slider.Track>
                                <Slider.Thumb index={0}></Slider.Thumb>
                            </Slider.Control>
                        </Slider.Root>
                    </div>
                </div>

                <div>
                    {skill.skillStats[skillLevel - 1].value.map(stat => (
                        <div key={stat} className='py-1.5 px-3 mb-0.5 rounded bg-black-19'>
                            {stat.replace(':', ' : ')}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CharacterSkills;