import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import { Htag } from '../Htag/Htag';
import CheckIcon from './check.svg';
import { P } from '../P/P';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <div className={styles.advantages}>
            <Htag tag='h2' className={styles.bigtitle}>Преимущества</Htag>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <Htag tag='h3' className={styles.title}>{a.title}</Htag>
                    <hr className={styles.vline} />
                    <P size='l'>{a.description}</P>
                </div>
            ))}
        </div>
    );
};