import React, { useState, useEffect } from 'react';
import './AddJogModal.css';
import CancelIcon from '../../assets/cancel.png';
import HTTPWrapper from '../../utils/HTTPWrapper';
import { Modal, Button } from 'react-bootstrap';

interface AddJogModalProps {
    show: boolean,
    handleClose: Function
}

export const AddJogModal = ({ show, handleClose }: AddJogModalProps) => {

    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const save = () => {
        const http = new HTTPWrapper();
        //const ms = 
        const data = {
            date: date,
            time: Number(time),
            distance: Number(distance)
        }

        http.post(`data/jog`, data)
            .then(res => {
                handleClose();
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                dialogClassName='override-modal'
            >
                <div className='addJogModal'>
                    <div className="modal-header cancelIcon-wrp">
                        <img src={CancelIcon} onClick={() => handleClose()} />
                    </div>
                    <div className="container modal-body modal-body-wrp">
                        <div className="box2">
                            <span>
                                Distance
                            </span>
                            <input type="number" name="distance" className='' value={distance} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDistance(e.target.value)} />
                        </div>
                        <div className="box2">
                            <span>
                                Time
                            </span>
                            <input type="number" name="time" className='' value={time} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)} />
                        </div>
                        <div className="box2">
                            <span>
                                Date
                            </span>
                            <input type="text" name="date" className='' value={date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate((e.target.value))} />
                        </div>
                        <div className='addJog-btn-wrp'>
                            <button className='addJog-btn' onClick={save}>Save</button>
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}

/*

<div className="modal" tabIndex={-1} role="dialog" id="exampleModal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content addJogModal">
                        <div className="modal-header cancelIcon-wrp">
                            <img src={CancelIcon} data-dismiss="modal" />
                        </div>
                        <div className="container modal-body modal-body-wrp">
                            <div className="box2">
                                <span>
                                    <b>Distance</b>
                                </span>
                                <input type="text" name="distance" className='' value={distance} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDistance(e.target.value)} />
                            </div>
                            <div className="box2">
                                <span>
                                    <b>Time</b>
                                </span>
                                <input type="text" name="time" className='' value={time} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)} />
                            </div>
                            <div className="box2">
                                <span>
                                    <b>Date</b>
                                </span>
                                <input type="text" name="date" className='' value={date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate((e.target.value))} />
                            </div>
                            <div>
                                <button className='addJog-btn' onClick={save}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            */