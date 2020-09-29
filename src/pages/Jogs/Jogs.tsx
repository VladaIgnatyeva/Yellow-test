import React, { useEffect, useState } from 'react';
import HTTPWrapper from '../../utils/HTTPWrapper';
import { EmptyJogs } from '../../components/EmptyJogs/EmptyJogs';

interface IJogs {
    date: number,
    distance: number,
    id: number,
    time: number,
    user_id: string
}

export const Jogs = () => {

    const [jogs, setJogs] = useState<IJogs[] | []>([]);

    useEffect(() => {
        const http = new HTTPWrapper();
        http.get(`data/sync`)
            .then(res => {
                // setJogs(res.data.responsive.jogs)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>
            {
                jogs.length > 0 ? null : <EmptyJogs />
            }
        </>
    )
}