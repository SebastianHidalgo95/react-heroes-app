import { heroes } from "../data/heroes";

export const getHeroesByAny = ( param ='' ) => {

    if(param === '') {
        return [];
    }
    param = param.toLocaleLowerCase();

    return heroes.filter( hero => (
        hero.superhero.toLocaleLowerCase().includes(param) || hero.alter_ego.toLocaleLowerCase().includes(param)
        || hero.id.toLocaleLowerCase().includes(param) 
        ));
}