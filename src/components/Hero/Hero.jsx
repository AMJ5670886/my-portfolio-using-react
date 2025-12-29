import {getImageUrl} from '../../utils';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
          <h2 className={styles.title}>Hi, I'm Ajold Martin Jose</h2>
          <p className={styles.description}>I am a full stack developer with 5 years experience using React and Node.<br/>
             Contact me to know more!</p>
          <a href="mailto:ajoldmartinjose@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
    <img src={getImageUrl('hero/hero.png')} alt='my-photo' className={styles.heroImage} ></img>
    </section>
  )
}

export default Hero
