import FontContext from './fontContext';
import { Component } from 'react'

class FontProvider extends Component {
    constructor(props) {
        super(props);

        this.setFont = (font) => {
            if (typeof window !== "undefined") {
                localStorage.setItem('reader-font', font)
            }
            this.setState({
                font: font
            });
        }
        this.state = {
            font: 'font-serif',
            setFont: this.setFont,
        };

    }

    componentDidMount() {
        this.setFont(localStorage.getItem('reader-font'))
    }

    render() {
        return (
            <FontContext.Provider value={this.state}>
                {this.props.children}
            </FontContext.Provider>
        );
    }

}

export default FontProvider
