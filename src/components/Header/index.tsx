import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import logoIgnite from '../../assets/Ignite-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Home" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historic">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
