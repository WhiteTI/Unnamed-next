import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import Title from "@/components/title/Title";
import classes from '@/styles/pages/MainLayout.module.css'
import WeaponFilter from "@/components/filters/WeaponFilter";
import RarityFilter from "@/components/filters/RarityFilter";
import ElementFilter from "@/components/filters/ElementFilter";
import Search from "@/components/filters/Search";

export const metadata = {
    title: "Genshin Next",
    description: "Try create a new genshin next.",
};

export default function MainLayout({ children }) {
    return (
        <>
            <Sidebar/>
            <div style={{paddingLeft: '64px'}}>
                <div className={`bg-fixed ${classes.mainBgImage}`}>
                    <div className='container mx-auto pt-56'>
                        <Title/>
                        <div className='grid grid-cols-[160px_180px_470px_360px] justify-between'>
                            <WeaponFilter grid={'col-start-1 col-end-2'}/>
                            <RarityFilter grid={'col-start-2 col-end-3'}/>
                            <ElementFilter grid={'col-start-3 col-end-4'}/>
                            <Search grid={'col-start-4'}/>
                        </div>
                    </div>
                </div>

                <main className={classes.mainBgColor}>
                    <div className='container mx-auto py-8 min-h-screen relative'>
                        {children}
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    );
}
