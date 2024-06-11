import styles from './Contact.module.css';
import {getImageUrl} from '../../utils';

function Contact() {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h3>Contact</h3>
            <p>Feel free to contact!</p>
        </div>
        <ul className={styles.listItems}>
            <li className={styles.listItem}>
                <img src={getImageUrl('contact/email.png')} alt='emailIcon' className={styles.itemImg}/>
                <a href='mailto:ajoldmartinjose@gmail.com'>ajoldmartinjose@gmail.com</a>
            </li>
            <li className={styles.listItem}>
                <img src={getImageUrl('contact/linkedin.png')} alt='linkedinIcon' className={styles.itemImg}/>
                <a href='https://www.linkedin.com/in/ajold-jose-40a021186/'>linkedin.com/ajold-jose</a>
            </li>
            <li className={styles.listItem}>
                <img src={getImageUrl('contact/github.png')} alt='githubIcon' className={styles.itemImg}/>
                <a href='https://github.com/AMJ5670886'>github.com/AMJ5670886</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
