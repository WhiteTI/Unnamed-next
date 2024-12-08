import classes from '@/styles/pages/WeaponsAndArtifactsPages.module.css'
import Image from "next/image";

const Page = async () => {
    const data = await fetch('http://localhost:3000/weapons')
    const weapons = await data.json()

    return (
        <div className='grid xl:grid-cols-3 md:grid-cols-3 auto-rows-auto gap-4'>
            {weapons.map(weapon => (
                <div key={weapon.id} className={`rounded-t-lg  ${classes.card}`}>
                    <div className={`grid grid-cols-[160px_minmax(0,_1fr)] items-center gap-x-2 rounded-t-lg h-40 ${classes.cardTitle}`}
                        style={{backgroundColor: weapon.rarity === 5 ? 'var(--5-star-color)' : weapon.rarity === 4 ? 'var(--4-star-color)' : 'var(--3-star-color)'}}
                    >
                        <img src={weapon.image} alt='weapon image' width={160} height={160}/>

                        <div className='text-lg font-medium'>
                            <p className='text-xl'>{weapon.name}</p>
                            <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                            <p>ATK <span className='text-xl font-semibold inline'> {weapon.atk}</span></p>

                            {weapon.mainStat &&
                                <>
                                    <p>{weapon.mainStat[0]}</p>
                                    <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                                </>
                            }
                        </div>
                    </div>

                    <div className='overflow-y-auto p-3 max-h-64'>
                        {weapon.description && <p>{weapon.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;