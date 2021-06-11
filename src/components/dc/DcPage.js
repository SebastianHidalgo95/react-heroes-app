import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const DcPage = () => {
    return (
        <div>
            <h1>DC Page</h1>
            <hr />
            <HeroeList publisher="DC Comics"/>
        </div>
    )
}
