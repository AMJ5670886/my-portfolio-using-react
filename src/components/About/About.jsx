import styles from './About.module.css';
import { getImageUrl } from '../../utils';

function About() {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImg.png')} alt='ajold' className={styles.aboutImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/backEnd.png')} alt='backEndIcon' className={styles.itemImg} />
                        <div>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimised back-end systems
                                and APIs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/frontEnd.png')} alt='frontEndIcon' className={styles.itemImg} />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
