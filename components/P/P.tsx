import cn from 'classnames';

import { PProps } from './P.props';
import styles from './P.module.css';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.m]: size === 'l',
        })}
            {...props}
        >
            {children}
        </p>
    );
};