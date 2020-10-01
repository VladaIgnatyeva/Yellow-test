import React, { useEffect, useState } from 'react';
import HTTPWrapper from '../../utils/HTTPWrapper';
import { EmptyJogs } from '../../components/EmptyJogs/EmptyJogs';
import { IJog } from '../../utils/types';
import { JogsList } from '../../components/JogsList/JogsList';

export const Jogs = () => {

    const [jogs, setJogs] = useState<IJog[]>([]);
    const [isUpdate, setUpdate] = useState(0);

    useEffect(() => {
        const http = new HTTPWrapper();
        http.get(`data/sync`)
            .then(res => {
                setJogs(res.data.response.jogs);
            })
            .catch(err => {
                console.log(err);
            })
    }, [isUpdate]);

    return (
        <>
            {
                jogs.length > 0 ? <JogsList jogs={jogs} setUpdate={setUpdate} /> : <EmptyJogs setUpdate={setUpdate} />
            }
        </>
    )
}