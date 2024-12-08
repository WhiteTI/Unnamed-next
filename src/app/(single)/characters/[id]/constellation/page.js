const Page = async ({params}) => {
    const {id} = await params
    const data = await fetch('http://localhost:3000/characters/' + id, {
        cache: 'force-cache'
    })
    let character = await data.json();

    return (
        <div>
            {character.constellations.map(item => (
                <div key={item.id} className='mb-5'>
                    <div className='flex py-3 px-6 items-center text-2xl font-semibold gap-x-10 mb-1 bg-black-19 rounded-t'>
                        <img className='w-16 bg-gray-36 rounded-md' src={item.image} alt="Constellation image"/>
                        <span>{item.name}</span>
                    </div>

                    <div className='py-3 px-6 bg-black-19 rounded-b'>
                        <span>{item.description}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;