import React from 'react'
import PxWrapper from '../shares/PxWrapper'

const Weare = () => {
    return (
        <PxWrapper>
            <div className="mt-10 lg:h-[165px] h-[200px] bg-custom-gradient bg-h-[80px] rounded-lg text-white items-center p-[20px]">
                <p className='text-center lg:text-[20px] text-[14px] leading-[28px]'>We are looking for people willing to follow our advice and do what works to get into top colleges!</p>
                <div className="">
                    <button className='h-[38px] text-center mt-2 bg-white text-black rounded-md'>
                        <span className='px-2 h-[24px]'>BOOK YOUR STRATEGY SESSION!</span>
                    </button>
                </div>
            </div>
        </PxWrapper>
    )
}

export default Weare
