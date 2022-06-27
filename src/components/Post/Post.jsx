import Styles from './Post.module.css';

export function Post() {
  return (
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <img className={Styles.avatar} src="https://avatars.githubusercontent.com/u/60549284?v=4" alt="Foto de perfil" />
          <div className={Styles.authorinfo}>
            <strong>Eduardo Baeta</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='24 de Junho às 11:00h' dateTime='2022-06-24 11:00:00'>Publicado a 1h</time>
      </header>

      <div className={Styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}
