export function suspensify(promise) {
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
  
 export function fetchPokemon(id){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json() );
  }
  