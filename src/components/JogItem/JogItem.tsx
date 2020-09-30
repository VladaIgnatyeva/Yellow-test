import React from 'react';
import './JogItem.css';
import icon from '../../assets/icon.png';
import { IJog } from '../../utils/types';
import { dateFormat, distanceFormat, speedFormat, timeFormat } from '../../utils/dataFormatting'


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
                    <span><span className='black bold'>Speed: </span>{speedFormat(distance, time)}</span>
                    <span><span className='black bold'>Distance: </span>{distanceFormat(distance)} km.</span>
                    <span><span className='black bold'>Time: </span>{timeFormat(time)} min</span>
                </div>
            </div>
        </>
    )
}