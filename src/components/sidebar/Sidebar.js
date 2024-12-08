import Image from "next/image";
import Link from "next/link";
import classes from '@/styles/components/Sidebar.module.css'
import genshinLogo from '@/assets/images/genshin.png'
import hsrLogo from '@/assets/images/hsr.png'
import zzzLogo from '@/assets/images/zzz.png'
import charactersLogo from '@/assets/images/characters.svg'
import weaponsLogo from '@/assets/images/weapon.svg'
import artifactsLogo from '@/assets/images/art.svg'

const Sidebar = () => {
    return (
        <div className='z-50 w-16 fixed h-screen py-3 bg-black-24 border-r border-gray-36'>
            <div className='flex flex-col items-center'>
                <div className='mb-7'>
                    <p className='text-4xl'>F</p>
                </div>

                <div className='h-56'>
                    <div className={`px-1 py-2 flex flex-col gap-y-2 ${classes.gameSwitcher}`}>
                        <a href='#'>
                            <Image src={genshinLogo} alt='genshin' className={classes.active}/>
                        </a>
                        <a href='#'>
                            <Image src={hsrLogo} alt='hsr'/>
                        </a>
                        <a href='#'>
                            <Image src={zzzLogo} alt='zzz'/>
                        </a>
                    </div>
                </div>

                <nav className='flex flex-col gap-y-7'>
                    <Link href='/characters'>
                        <Image src={charactersLogo} alt="characters"/>
                    </Link>
                    <Link href='/weapons'>
                        <Image src={weaponsLogo} alt="weapon"/>
                    </Link>
                    <Link href='/artifacts'>
                        <Image src={artifactsLogo} alt="artifacts"/>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;