import CharacterListCard from "@/components/characterListCard/CharacterListCard";

const Page = async () => {
    let data = await fetch('http://localhost:3000/characters', {
        cache: 'force-cache',
    })
    let characters = await data.json()

    return (
        <div className='flex flex-wrap gap-5'>
            {characters.map(char => (
                <CharacterListCard
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    element={char.element}
                    img={char.listImage}
                    rarity={char.rarity}
                    weapon={char.weaponType}
                />
            ))}
        </div>
    );
};

export default Page;