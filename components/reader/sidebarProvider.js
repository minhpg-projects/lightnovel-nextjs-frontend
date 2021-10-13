import SidebarContext from './sidebarContext';
import { Component } from 'react'

class SidebarProvider extends Component {
    constructor(props) {
        super(props);
    
        this.toggleSidebar = () => {
            this.setState(state => ({
                sidebarOpen: !state.sidebarOpen
            }));
        }
    
        this.state = {
          sidebarOpen: false,
          toggleSidebar: this.toggleSidebar,
        };
    }
    render() {
        return (
            <SidebarContext.Provider value={this.state}>
                {this.props.children}
            </SidebarContext.Provider>
        );
    }

}

export default SidebarProvider
