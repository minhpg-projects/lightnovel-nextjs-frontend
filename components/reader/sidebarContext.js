import {createContext} from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const SidebarContext = createContext({
    sidebarOpen: false,
    toggleSidebar: () => {    }
})

export default SidebarContext