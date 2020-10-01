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
    const [selectedJog, setSelectedJog] = useState({
        date: 0,
        distance: 0,
        time: 0,
        id: 0,
        user_id: ''
    } as IJog);

    const [isEdit, setEdit] = useState(false);

    const handleClose = () => { setUpdate(new Date().getMilliseconds()); setShowModal(false); }
    const handleShow = () => setShowModal(true);

    const editJog = (jog: IJog) => {
        setEdit(true);
        setSelectedJog(jog);
        handleShow();
    }

    return (
        <div className='jogsList-container'>
            {
                jogs.map((jog: IJog) => {
                    return <JogItem
                        key={getRandomInt(5364)}
                        jog={jog}
                        editJog={editJog}
                    />
                })
            }

            <div className='addIcon-wrp' >
                <img src={AddIcon} onClick={handleShow} />
            </div>

            {
                isEdit ?
                    <AddJogModal
                        show={showModal}
                        handleClose={handleClose}
                        jog={selectedJog}
                    />
                    : <AddJogModal
                        show={showModal}
                        handleClose={handleClose}

                    />
            }

        </div>
    )
}