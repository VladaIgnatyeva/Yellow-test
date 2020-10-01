import React, { useState, useEffect } from 'react';
import './AddJogModal.css';
import CancelIcon from '../../assets/cancel.png';
import HTTPWrapper from '../../utils/HTTPWrapper';
import { Modal, Button } from 'react-bootstrap';
import { IJog } from '../../utils/types';
import { dateFormat } from '../../utils/dateFormat';

interface AddJogModalProps {
    show: boolean,
    handleClose: Function,
    jog?: IJog
}

export const AddJogModal = ({ show, handleClose, jog }: AddJogModalProps) => {

    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (jog) {
            setDistance(String(jog.distance));
            setTime(String(jog.time));
            setDate(dateFormat(jog.date));
        }
    }, [show]);

    const save = () => {
        const http = new HTTPWrapper();
        const data = {
            date: date,
            time: Number(time),
            distance: Number(distance)
        }

        if (jog) {
            Object.assign(data, { 'jog_id': jog.id, 'user_id': jog.user_id });

            http.put(`data/jog`, data)
                .then(res => {
                    clear();
                    handleClose();
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            http.post(`data/jog`, data)
                .then(res => {
                    clear();
                    handleClose();
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const clear = () => {
        setDistance('');
        setTime('');
        setDate('');
    };

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
