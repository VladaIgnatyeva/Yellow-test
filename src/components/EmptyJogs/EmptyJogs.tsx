import React, { useState, useEffect } from 'react';
import './EmptyJogs.css';
import sadRound from '../../assets/sadRoundedSquareEmoticon.png';
import { AddJogModal } from '../AddJogModal/AddJogModal';
import { truncate } from 'fs';

interface EmptyJogsProps {
    setUpdate: Function
}

export const EmptyJogs = ({ setUpdate }: EmptyJogsProps) => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => { setUpdate(new Date().getMilliseconds()); setShowModal(false); }
    const handleShow = () => setShowModal(true);

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
                <button className='btn-create-jog' onClick={handleShow}><span className='letMeIn'>Create your jog first</span></button>
            </div>
            <AddJogModal
                show={showModal}
                handleClose={handleClose}
            />
        </>
    )
}