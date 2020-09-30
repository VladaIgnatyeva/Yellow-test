import React from 'react';
import './JogsList.css';
import { JogItem } from '../JogItem/JogItem';
import { IJog } from '../../utils/types';
import { getRandomInt } from '../../utils/randomInt';

interface IJogsList {
    jogs: IJog[]
}

export const JogsList = ({ jogs }: IJogsList) => {
    return (
        <div className='jogsList-container'>
            {
                jogs.map((jog: IJog) => {
                    return <JogItem
                        key={getRandomInt(5364)}
                        date={jog.date}
                        distance={jog.distance}
                        time={jog.time}
                    />
                })
            }
        </div>
    )
}