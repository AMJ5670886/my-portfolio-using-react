import styles from './Experience.module.css';
import { getImageUrl } from '../../utils';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

function Experience() {
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.contents}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return (
                                <div className={styles.skill} key={id}>
                                    <div className={styles.imageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <div>
                                <li key={id} className={styles.historyItem}>
                                    <div>
                                        <img src={getImageUrl(historyItem.imageSrc)} className={styles.historyLogo} />
                                    </div>
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>
                                            {
                                                historyItem.experiences.map((experience, id) => {
                                                    return (
                                                        <li key={id}>
                                                            {experience}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Experience
