import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={'fixed top-0 w-screen text-jr-dark'}>
            <div className={'max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between'}>
            <div id={'home'}>
                    <Link href="/" className={'flex flex-row text-2xl items-center font-bold'}>
                        <Image 
                            className={'h-100 w-100'}
                            src="/assets/images/logo/icon-jr.png"
                            alt="@joserivasgt"
                            width={100}
                            height={100}
                            priority
                        />
                        @joserivasgt
                    </Link>
                </div>
            <nav>
                <ul className={'flex flex-row items-center'}>
                    <li>
                        <Link className={'p-4 hover:bg-jr-light hover:rounded-md hover:font-semibold'} href="/">
                            My Goal
                        </Link>
                    </li>
                    <li>
                        <Link className={'p-4 hover:bg-jr-light hover:rounded-md hover:font-semibold'} href="#experience">
                            My Experience
                        </Link>
                    </li>
                    <li>
                        <Link className={'p-4 hover:bg-jr-light hover:rounded-md hover:font-semibold'} href="#work">
                            My Work
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Link className={'bg-jr-blue p-4 rounded-md text-white hover:bg-jr-dark'} href="#contact">
                    Contact me now
                </Link>
            </div>
            </div>
        </header>
    );
};

export default Header;
