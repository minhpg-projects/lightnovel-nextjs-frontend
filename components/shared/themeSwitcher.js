import { useEffect } from 'react';
import {themeChange} from "theme-change"

const themeSwitcher = () => {

    useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
    }, []);
    
    return (
        <ul className="menu compact shadow-2xl">
            <li><a tabIndex="0" data-act-class="active" data-set-theme="light">🌝  light</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="dark">🌚  dark</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="cupcake">🧁  cupcake</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="bumblebee">🐝  bumblebee</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="emerald">✳️  Emerald</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="corporate">🏢  Corporate</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="synthwave">🌃  synthwave</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="retro">👴  retro</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="cyberpunk">🤖  cyberpunk</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="valentine">🌸  valentine</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="halloween">🎃  halloween</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="garden">🌷  garden</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="forest">🌲  forest</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="aqua">🐟  aqua</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="lofi">👓  lofi</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="pastel">🖍  pastel</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="fantasy">🧚&zwj;♀️  fantasy</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="wireframe">📝  Wireframe</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="black">🏴  black</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="luxury">💎  luxury</a></li>
            <li><a tabIndex="0" data-act-class="active" data-set-theme="dracula">🧛&zwj;♂️  dracula</a></li>
        </ul>
    )
}

export default themeSwitcher