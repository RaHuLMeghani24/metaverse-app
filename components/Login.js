import React from 'react';
import Image from 'next/image';
import {useMoralis} from "react-moralis";

function Login() {

    const {authenticate} = useMoralis();

    
    return (
        <div className='bg-black relative'>
           
            <div className='flex flex-col absolute z-50 h-4/6 items-center justify-center w-full
                            space-y-4'>
                {/* Logo */}
                <Image 
                    className='object-cover rounded-full'
                     src="https://links.papareact.com/3pi" height={200} width={200}
                />

                {/* Login button */}
                <button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>
                    Login to the MetaVerse
                </button>
            </div>
 
            <div className='w-full h-screen'>
                {/* Login form */}      
                <Image 
                        src="https://links.papareact.com/55n"
                        layout='fill'
                        objectFit='cover'
                />
            </div>
        </div>
    )
}

export default Login
