import StyleHeader from './Header.module.css'
import IgniteLogo from '../../assets/ignite_logo.svg'

export function Header(){
    return(
        <header className={StyleHeader.header}>
            <img src={IgniteLogo} alt="Logotipo Ignite" />
        </header>
    )
}