import React, {useEffect} from 'react';
import depan from '../assets/update.svg';

import {Fade} from 'react-reveal';

const Update = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <div className="mx-1 lg:mx-32 lg:mr-52">
            <Fade bottom>
                <section className="flex flex-col lg:flex-row lg:mt-12 p-2 lg:p-8 rounded-lg">
                        <div className="flex mx-auto mb-6 lg:mb-0 lg:order-last w-11/12 lg:w-2/5">
                            <img className="mx-auto" src={depan} alt="updet" width="400"/>
                        </div>
                        <div className="flex flex-col content-start text-center lg:text-left w-11/12 lg:w-3/5 mx-auto">
                            <h1 className="font-black font-head text-3xl lg:text-4xl xl:text-7xl leading-relaxed xl:leading-snug  uppercase"><span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-red-800 dark:to-red-300">UPDATE YANG AKAN HADIR</span></h1>
                            {/* <p className="text-base lg:text-2xl mt-4 mb-6 lg:mt-8 dark:text-gray-200 w-10/12 lg:leading-normal mx-auto lg:mx-0">Beberapa fitur yang akan hadir pada zero hero, gatau diupdate kapan, fokus sekolah duls ehhehehe.</p> */}
                        </div>
                </section>
            </Fade>
            <Fade bottom>
                <section className="flex flex-col m-8">
                    <hr className="h-1 w-48 bg-primary border-none mx-auto mb-9 lg:mb-12 " />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="mx-auto text-lg my-auto space-y-4">
                            <p>Beberapa fitur yang akan hadir pada zero hero.</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Fitur search button</li>
                                <li>Query kata berdasarkan abjad</li>
                                <li>Translate japanse ke indo</li>
                            </ul>
                            <p>NB : Gatau mau diupdate kapan, fokus sekolah duls ehhehehe.</p>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Update;