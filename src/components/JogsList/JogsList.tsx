import React, { useState, useEffect } from 'react';
import './JogsList.css';
import { JogItem } from '../JogItem/JogItem';
import { IJog } from '../../utils/types';
import { getRandomInt } from '../../utils/randomInt';
import AddIcon from '../../assets/add.png';
import { AddJogModal } from '../AddJogModal/AddJogModal';

interface IJogsList {
    jogs: IJog[],
    setUpdate: Function
}

export const JogsList = ({ jogs, setUpdate }: IJogsList) => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => { setUpdate(new Date().getMilliseconds()); setShowModal(false); }
    const handleShow = () => setShowModal(true);

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

            <div className='addIcon-wrp' >
                <img src={AddIcon} onClick={handleShow} />
            </div>

            <AddJogModal
                show={showModal}
                handleClose={handleClose}
            />
        </div>
    )
}