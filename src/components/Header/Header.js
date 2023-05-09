import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img alt="cvhjkls" src='https://avatars.mds.yandex.net/i?id=0ca0960abc81ec1493880b97c26b01c7-5232631-images-thumbs&n=13' />

        <div className={s.loginBlock}>
            {props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;