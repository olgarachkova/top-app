import cn from 'classnames';
import styles from './Logo.module.css';
import LogoIcon from './logo.svg';
import { LogoProps } from './Logo.props';

export const Logo = ({ className, ...props }:LogoProps): JSX.Element => {
    return (
        <div className={cn(className, styles.logo)} {...props}>
            <LogoIcon/> <span className={styles.topapp}>TOP-APP</span>
        </div>
    );
};