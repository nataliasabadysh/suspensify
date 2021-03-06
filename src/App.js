// Core
import React, {lazy, Suspense } from 'react';

// Components 
const PokemonDetailAsync = lazy(()=> import('./components/PokemonDetail'/* webpackChunkName: "poke-page" */ ))
const ErrorBoundary = lazy(()=> import('./components/ErrorBoundary'/* webpackChunkName: "error-page" */ ))

// const PokemonDetailAsync = lazy(()=> Promise.reject())

// const PokemonDetailAsync = lazy(
//     () => new Promise(resolve => setTimeout(()=> resolve({ default: ()=> 
//       <div>Fake Pokemon </div>
//     }), 1000) )
//   )

function App() {
  return (
    <>
        <Suspense fallback={'Loading... '}>

          <ErrorBoundary>
            <h1> hey there </h1>
            <PokemonDetailAsync title="test title" />
          </ErrorBoundary>

        </Suspense>
    </>
  );
}

export default App;
