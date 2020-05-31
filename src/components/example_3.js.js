import React, { useState } from 'react';

import { suspensify, fetchPokemon } from '../api';

// let pokemon = suspensify(
//     fetchPokemon(1) 
// );

let init = suspensify( fetchPokemon(1) );


export default function PokemonDetail(){
    const [pokemonResourse, setPokemonResourse] = useState(init);

    let pokemon = pokemonResourse.read();

    const _next = () => {
        return setPokemonResourse(
            suspensify(fetchPokemon(pokemon.id + 1) )
        )
    }

    return(
        <> 
            <h1>  hey : {pokemon.name}</h1>
            <button onClick={_next} type="button"> next</button>
        </>
    )
}