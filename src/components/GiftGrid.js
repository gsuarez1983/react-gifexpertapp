import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {

    const { data, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>

                {loading && <p>Loading</p> }
            
                <ol>
                    {
                        data.map( img => (
                            <GiftGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </ol>
                </div>
        </>
    )
}
