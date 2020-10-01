import React, { useEffect, useState } from 'react';
import HTTPWrapper from '../../utils/HTTPWrapper';
import { EmptyJogs } from '../../components/EmptyJogs/EmptyJogs';
import { IJog, IFilter } from '../../utils/types';
import { JogsList } from '../../components/JogsList/JogsList';
import { dateFormat } from '../../utils/dateFormat';

interface IJogs {
    filter: IFilter,
}

export const Jogs = ({ filter }: IJogs) => {

    const [jogs, setJogs] = useState<IJog[]>([]);
    const [allJogs, setAllJogs] = useState<IJog[]>([]);
    const [isUpdate, setUpdate] = useState(0);

    useEffect(() => {
        const http = new HTTPWrapper();
        http.get(`data/sync`)
            .then(res => {
                setJogs(res.data.response.jogs);
                setAllJogs(res.data.response.jogs);
            })
            .catch(err => {
                console.log(err);
            })

    }, [isUpdate, filter]);

    useEffect(() => {
        filterJogs();
    }, [allJogs]);

    const filterJogs = () => {
        
        const from = filter ? (new Date(filter.from).getTime() / 1000) : null;
        const to = filter ? new Date(filter.to).getTime() / 1000 : null;
        let result = null;

        if (from && to) {
            result = allJogs.filter((jog: IJog) => {
                return (jog.date > from && jog.date < to) ? true : false;
            })
        } else if (from) {
            result = allJogs.filter((jog: IJog) => {
                return (jog.date > from) ? true : false;
            })
        } else if (to) {
            result = allJogs.filter((jog: IJog) => {
                return (jog.date < to) ? true : false;
            })
        }

        if (result) setJogs(result as IJog[]);
    }

    return (
        <>
            {
                jogs.length > 0 ? <JogsList jogs={jogs} setUpdate={setUpdate} /> : <EmptyJogs setUpdate={setUpdate} />
            }
        </>
    )
}