import StyleAside from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={StyleAside.sidebar}>
            <img className={StyleAside.cover} 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80" 
            alt="Capa Perfil" 
            />

            <div className={StyleAside.profile}>
                <img className={StyleAside.avatar} src="https://avatars.githubusercontent.com/u/60549284?v=4" alt="Foto de perfil" />

                <strong>Eduardo Baeta</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}