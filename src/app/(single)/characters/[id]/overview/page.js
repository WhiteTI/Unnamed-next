import Image from "next/image";
import getRegionColor from "@/utils/getRegionColor";
import CharacterLevels from "@/components/characterLevels/CharacterLevels";
import CharacterSkills from "@/components/characterSkills/CharacterSkills";
import classes from '@/styles/components/Overview.module.css'
import star from '@/assets/images/5star.svg'

const Page = async ({params}) => {
    const {id} = await params
    const data = await fetch('http://localhost:3000/characters/' + id, {
        cache: 'force-cache'
    })
    let character = await data.json();

    const stars = []
    const regionColor = getRegionColor(character.region)

    for (let i = 0; i < +character.rarity; i++) {
        stars.push(<Image key={i} src={star} alt="Star"/>)
    }

    return (
        <>
            <div className='flex justify-between mb-7'>
                <div className='flex gap-x-7'>
                    <div className={classes.imgBackground} style={{backgroundColor: character.rarity === 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}>
                        <img src={character.image} alt={character.name + 'image'} />
                    </div>

                    <div>
                        <p className='text-xl font-semibold mb-3'>{character.title}</p>
                        <div className='flex justify-start'>
                            {stars}
                        </div>

                        <div className={`flex items-center ${classes.weapon}`}>
                            <div className={classes.weaponImg}>
                                <img src={character.weaponType.image} alt={character.weaponType.name + 'image'} />
                            </div>
                            <div className={classes.weaponText}>
                                {character.weaponType.name}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-x-12'>
                    <div>
                        <p className={classes.elementRegionText}>Element</p>
                        <div className={`flex items-center ${classes.elementLogo}`}>
                            <img src={character.element.image} alt='image'/>
                            <p className='text-xl capitalize' style={{color: `var(${character.element.color})`}}>{character.element.name}</p>
                        </div>
                    </div>
                    <div>
                        <p className={`${classes.elementRegionText}`}>Region</p>
                        <p className='text-xl' style={{color: regionColor}}>{character.region}</p>
                    </div>
                </div>
            </div>

            <div className={classes.description}>
                {character.description}
            </div>

            <div className='w-full mt-6'>
                <CharacterLevels levels={character.levels} color={character.element.color}/>
            </div>

            <div className={`w-full mt-6 rounded ${classes.talents}`}>
                <h3 className='font-medium text-4xl mb-6'>Talents</h3>
                <CharacterSkills skills={character.skills} color={character.element.color}/>
            </div>

            <div className='flex gap-x-4 mt-5 content-stretch'>
                {character.passiveSkills.map(skill =>
                    <div key={skill.id} className='basis-1/3 bg-black-24 rounded-t'>
                        <div className='flex items-center py-2 px-4 text-lg font-semibold gap-x-5 bg-black-19 rounded-b'>
                            <img src={skill.image} alt={skill.name} className='w-16'/>
                            <span>{skill.name}</span>
                        </div>
                        <hr/>
                        <div className='py-2 px-4 max-h-96 overflow-y-auto'>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Page;