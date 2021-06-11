import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selector/getHeroesById';

export const HeroesPage = ({ history }) => {

    const { heroeId } = useParams();
    
    const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId])

    
    if( !hero ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        
        // history.push(`/${heroeId.split('-')[0]}`);
        history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${ heroeId }.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={ superhero }
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher : </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b> {first_appearance}
                    </li>
                    
                    <h5>Characters</h5>
                    <p>{ characters }</p>
                    <div className="col-5">
                        <button 
                            className="btn btn-outline-info"
                            onClick={ handleReturn }
                        >
                            Return
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
