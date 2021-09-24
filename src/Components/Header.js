import './Header.css'
import Logo from './Images/logo.svg'

const Header = () =>{
    return(
        <>
            <div class="nav">
                <ul>
                    <li>
                        <a href="">
                            <img src={Logo} />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Товары</a>
                    </li>
                    <li>
                        <a href="">Комнаты</a>
                    </li>
                    <li class="vdoh">
                        <a href="">Вдохновение</a>
                    </li>
                    <li>
                        <a href="">Услуги</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <input placeholder="Что вы ищете?" type="search"/>
                        <i class="fas fa-search ghost"></i>
                        <button type="submit"><i class="fas fa-camera cam"></i></button>
                    </li>
                </ul>
                <ul class="contactsicon">
                    <li>
                        <a href=""><i class="fas fa-truck"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="far fa-user"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="far fa-heart"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fas fa-shopping-cart"></i></a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Header;