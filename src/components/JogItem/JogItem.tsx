import React from 'react';
import './JogItem.css';
import icon from '../../assets/icon.png';
import { IJog } from '../../utils/types';
import { dateFormat } from '../../utils/dateFormat'


export const JogItem = ({ date, distance, time }: IJog) => {
    return (
        <>
            <div className='jog-container'>
                <img
                    src={icon}
                    className='jogIcon'
                />
                <div className='box'>
                    <span>{dateFormat(date)}</span>
                    <span><span className='black bold'>Speed: </span>{(distance / time * 60).toFixed(0)}</span>
                    <span><span className='black bold'>Distance: </span>{distance} km.</span>
                    <span><span className='black bold'>Time: </span>{time} min</span>
                </div>
            </div>
        </>
    )
}