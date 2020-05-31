import React from 'react';
// root Direct link to results: https://pokeapi.co/api/v2/pokemon/1


function suspensify(promise) {
  let status = "pending";
  let result;

  let suspender = promise.then(
    response => {
      status = "success";
      return result = response;
    },
    error => {
      status = "error";
     return result = error;
    }
  );

  return {
    read() {
      if (status === "pending") { throw suspender } 
      if (status === "error")  {  throw result }
      if (status === "success"){ return result }
    }
  };
}

function fetchPokemon(id){
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json() );
}
let pokemon = suspensify(
    fetchPokemon(1) 
);

export default function PokemonDetail(){
    return(
        <> 
            <h1> {pokemon.read().name}</h1>
        </>
    )
}