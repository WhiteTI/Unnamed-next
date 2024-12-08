import SingleCharacterMenu from "@/components/singleCharacterMenu/SingleCharacterMenu";
import classes from '@//styles/pages/SingleLayout.module.css'
import SingleCharacterPathTitle from "@/components/singleCharacterPathTitle/SingleCharacterPathTitle";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: "Amber",
    description: "Best character",
};

export default async function SingleLayout({ children, params }) {
    const {id} = await params
    const data = await fetch('http://localhost:3000/characters/' + id, {
        cache: 'force-cache'
    })
    let character = await data.json();

    return (
        <>
            <Sidebar/>
            <div style={{paddingLeft: '64px'}}>
                <div className={`relative ${classes.mainBgColor}`}>
                    <div className={`absolute z-0 w-full overflow-hidden ${classes.fullWish}`}
                         style={{backgroundImage: `url(${character.bgImage})`}}></div>
                    <div className={`absolute z-0 ${classes.imageShadow}`}></div>

                    <div className='container mx-auto pt-64 relative z-10'>
                        <h1 className={`font-bold uppercase mb-6 ${classes.name}`}>{character.name}</h1>

                        <div className='flex'>
                            <SingleCharacterMenu
                                activeStyle={{
                                    fontWeight: 600,
                                    borderRight: `4px solid var(${character.element.color})`,
                                    background: `color(from var(${character.element.secondColor}) srgb r g b / 0.58)`
                                }}
                            />

                            <div className='w-full'>
                                <SingleCharacterPathTitle color={character.element.color}
                                                          secondColor={character.element.secondColor}/>
                                <main className={`p-8 min-h-96 ${classes.wrapper}`}>
                                    {children}
                                </main>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}
