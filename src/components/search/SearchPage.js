import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';

import { useForm } from '../../Hooks/useForm';

import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByAny } from '../../selector/getHeroesByAny';

export const SearchPage = ({ history }) => {

    const location = useLocation();

    const { q='' } = queryString.parse(location.search);
    

    const [formValues, handleInputChange, reset] = useForm( {
        lookFor: q,
    });

    const { lookFor } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        
        history.push(`?q=${ lookFor }`)

        
    }
    const heroesFiltered = useMemo(() => getHeroesByAny( q ), [ q ] );
    return (
        <div>
            <h1>Search Page</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            name="lookFor"
                            placeholder="Find your hero"
                            className="form-control"
                            value={ lookFor }
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                        
                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                        
                    >
                        Search
                    </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        ( q ==='')
                            &&
                            <div className="alert alert-info">
                                Search you Hero
                            </div>
                    }

                    {
                        ( q !=='' && heroesFiltered.length ===0 )
                            &&
                            <div className="alert alert-danger">
                                There is no a heroe with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroeCard 
                                key={ hero.id}
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
