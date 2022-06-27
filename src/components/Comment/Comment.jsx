import styles from './Comment.module.css'
import { BiTrash } from 'react-icons/bi'
import { FiThumbsUp } from 'react-icons/fi'
import { Avatar } from '../Avatar/Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={'https://avatars.githubusercontent.com/u/60549284?v=4'} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Baeta</strong>
              <time title='24 de Junho às 11:00h' dateTime='2022-06-24 11:00:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <BiTrash size={24} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!
          </p>
        </div>
        <footer>
          <button>
            <FiThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
