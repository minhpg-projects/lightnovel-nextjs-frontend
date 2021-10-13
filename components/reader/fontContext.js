import {createContext} from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const FontContext = createContext({
    font: 'font-serif',
    setFont: () => {    }
})

export default FontContext