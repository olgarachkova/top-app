import cn from 'classnames';

import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '../logo.svg';
import { ButtonIcon } from '../../components';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(()=>{
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 1,
            x: '100%',
        }
    };
    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo/>
            <ButtonIcon appearance='white' icon='menu' onClick={()=>setIsOpened(true)}/>
            <motion.div className={styles.mobileMenu} variants={variants} initial='closed' animate={isOpened? 'opened': 'closed'}>
                <Sidebar/>
                <ButtonIcon appearance='white' icon='close' className={styles.menuClose} onClick={()=>setIsOpened(false)}/>
            </motion.div>
        </header>
    );
};