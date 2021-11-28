import React from "react";
import './header-links-item.css';


export const HeaderLinksItem = props => {
    return (
        <div className="header-links-item">

            <a href={props.link} title={props.title}>
                <img src={props.icon} alt={props.id} />
            </a>
        </div>
    )
}

//
// import {ReactComponent as BehanceIcon} from './icons/behance_logo_icon.svg';
// import {ReactComponent as CodewarsIcon} from './icons/codewars_logo_icon.svg';
// import {ReactComponent as FacebookIcon} from './icons/facebook_logo_icon.svg';
// import {ReactComponent as InstargamIcon} from './icons/instagram_logo_icon.svg';
// import {ReactComponent as LinkedinIcon} from './icons/linkedin_logo_icon.svg';
// import {ReactComponent as TelegramIcon} from './icons/telegram_logo_icon.svg';
// import {ReactComponent as TwitterIcon} from './icons/twitter_logo_icon.svg';
//
//
// export const HeaderLinksItem = props => {
//     switch (props.name) {
//         case 'Linkedin':
//             return <LinkedinIcon/>
//         case 'Telegram':
//             return <TelegramIcon/>
//         case 'Codewars':
//             return <CodewarsIcon/>
//         case 'Behance':
//             return <BehanceIcon/>
//         case 'Facebook':
//             return <FacebookIcon/>
//         case 'Twitter':
//             return <TwitterIcon/>
//         case 'Instargam':
//             return <InstargamIcon/>
//         default:
//             return null;
//     }
// }
