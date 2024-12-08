import classes from '@/styles/pages/WeaponsAndArtifactsPages.module.css'

const Page = async () => {
    const data = await fetch('http://localhost:3000/artifacts')
    const artifacts = await data.json()

    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-3 auto-rows-auto justify-evenly items-stretch gap-4'>
            {artifacts.map(artifact => (
                <div key={artifact.id} className={`rounded-t-lg  ${classes.card}`}>
                    <div className={`grid grid-cols-[160px_minmax(0,_1fr)] items-center gap-x-2 rounded-t-lg pr-3 h-40 ${classes.cardTitle}`}
                        style={{backgroundColor: artifact.rarity === 5 ? 'var(--5-star-color)' :
                                artifact.rarity === 4 ? 'var(--4-star-color)' : 'var(--3-star-color)'}}
                    >
                        <img src={artifact.image} alt="artifact image" width={160} height={160}/>

                        <div className='text-lg font-medium'>
                            <p className='text-xl'>{artifact.name}</p>
                            <p className='font-semibold text-xl'>{artifact.rarity}&#9733;</p>
                        </div>
                    </div>

                    <div className='overflow-y-auto p-3 max-h-64'>
                        {artifact.effect.map((item, i) => <p key={i}>{item}</p>)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;