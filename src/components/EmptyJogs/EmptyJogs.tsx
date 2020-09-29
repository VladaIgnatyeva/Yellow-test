import React from 'react';
import './EmptyJogs.css';
import sadRound from '../../assets/sadRoundedSquareEmoticon.png';


export const EmptyJogs = () => {

    const createJog = () => {

    }

    return (
        <>
            <div className='emptyJogs-container'>
                <div className='box'>
                    <img src={sadRound}
                        className='sadRound' />
                    <span className='description'>
                        Nothing is there
                    </span>
                </div>
                <button className='btn-create-jog' onClick={createJog}><span className='letMeIn'>Create your jog first</span></button>

            </div>
        </>
    )
}