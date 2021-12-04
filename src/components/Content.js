import React from 'react'
import imageOne from '../images/egg.jpg'
import imageTwo from '../images/eggs.jpg'

export const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={imageOne} alt="egg" className="h-full rounded mb-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Eggs salad</h2>
                <p className="mb-2">Yummy & Delicious</p>
                <span>$20</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={imageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">Eggs $ Chocolate</h2>
            <p className="mb-2">Yummy & Delicious</p>
            <span>$50</span>
        </div>
    </div>
    </>
    )
}
