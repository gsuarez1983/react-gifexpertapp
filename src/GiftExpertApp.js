// Functional Component.

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExperApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GiftExperApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GiftGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    )

}

export default GiftExperApp;