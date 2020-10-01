import React from 'react';
import './JogItem.css';
import icon from '../../assets/icon.png';
import { IJog } from '../../utils/types';
import { dateFormat } from '../../utils/dateFormat'

interface JogItemProps {
    jog: IJog,
    editJog: Function
}

export const JogItem = ({ jog, editJog }: JogItemProps) => {
    return (
        <>
            <div className='jog-container' onClick={() => { editJog(jog) }}>
                <img
                    src={icon}
                    className='jogIcon'
                />
                <div className='box'>
                    <span>{dateFormat(jog.date)}</span>
                    <span><span className='black bold'>Speed: </span>{(jog.distance / jog.time * 60).toFixed(0)}</span>
                    <span><span className='black bold'>Distance: </span>{jog.distance} km.</span>
                    <span><span className='black bold'>Time: </span>{jog.time} min</span>
                </div>
            </div>
        </>
    )
}