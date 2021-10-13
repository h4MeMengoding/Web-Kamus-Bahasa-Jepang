import React from 'react'
import FallbackLoading from './FallbackLoading';
const WordDetail = React.lazy(() => import('./WordDetail'));

const WordsContainer = (props) =>{
    if (props.data.length === 0) {
        if (props.checkData) {
            return <FallbackLoading height="96" span="Memuat data database"/>
        } else {
            return <FallbackLoading height="96" text="Words tidak ditemukan"/>
        }
    }
    return(
        <div className="flex justify-center flex-col space-y-5">
            {
                props.data.map((data, idx) => {
                    return <WordDetail key={idx} data={data}/>
                })
            }
        </div>
    )
}

export default WordsContainer;