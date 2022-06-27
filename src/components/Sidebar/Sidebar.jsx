import styles from './Sidebar.module.css'
import { RiEdit2Line } from 'react-icons/ri'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
        alt="Capa Perfil"
      />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src={'https://avatars.githubusercontent.com/u/60549284?v=4'} />

        <strong>Eduardo Baeta</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <RiEdit2Line size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
