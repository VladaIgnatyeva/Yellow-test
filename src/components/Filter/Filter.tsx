import React, { useState } from 'react';
import './Filter.css';
import { IFilter } from '../../utils/types';

interface FilterProps {
    filter: IFilter,
    setFilter: Function
}

export const Filter = ({ filter, setFilter }: FilterProps) => {

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({
            ...filter,
            [e.target.id]: e.target.value
        });
    }

    return (
        <>
            <div className='filter-container'>
                <div className='box'>
                    <div className='box2'>
                        <span>Date from</span>
                        <input
                            type="date"
                            placeholder=' '
                            className='filter-input'
                            value={filter.from}
                            onChange={handleFilter}
                            id={'from'} />
                    </div>
                    <div className='box2'>
                        <span>Date to</span>
                        <input
                            type="date"
                            className='filter-input'
                            value={filter.to}
                            id='to'
                            onChange={handleFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}