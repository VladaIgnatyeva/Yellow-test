import React, { useEffect, useState } from 'react';
import HTTPWrapper from '../../utils/HTTPWrapper';
import { EmptyJogs } from '../../components/EmptyJogs/EmptyJogs';
import { IJog, IFilter } from '../../utils/types';
import { JogsList } from '../../components/JogsList/JogsList';
import { Filter } from '../../components/Filter/Filter';

interface IJogs {
    // filter: IFilter,
    // jogs: IJog[],
   // isActiveFilter: boolean
}

export const Jogs = ({  }: IJogs) => {

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
    }, [isUpdate]);
    /*
        useEffect(() => {
            const from = new Date(filter.from).getTime();
            const to = new Date(filter.to).getTime();
            debugger;
            const result = allJogs.filter((jog : IJog) => {
                debugger;
               return (jog.date > from && jog.date < to) ? true : false ;
            } )
            debugger;
            setJogs(result);
        }, [filter])*/

    return (
        <>

            {
                jogs.length > 0 ? <JogsList jogs={jogs} setUpdate={setUpdate} /> : <EmptyJogs setUpdate={setUpdate} />
            }
        </>
    )
}