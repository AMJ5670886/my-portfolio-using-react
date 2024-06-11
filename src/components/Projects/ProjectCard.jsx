import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

function ProjectCard({ project: { title, imageSrc, description, skills, source } }) {
    return (
        <div className={styles.project}>
            <img src={getImageUrl(imageSrc)} alt={title} className={styles.projectImg}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return (
                            <li key={id} className={styles.skill}>{skill}</li>
                        )
                    })
                }
            </ul>
            <div>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    )
}

export default ProjectCard
