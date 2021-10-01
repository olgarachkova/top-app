import cn from 'classnames';

import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import { Logo } from '../Logo/Logo';
import React from 'react';
import Link from 'next/link';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Link href={`/`}>
                <a>
                    <Logo className={styles.logo} />
                </a>
            </Link>
            <Search />
            <Menu />
        </div>
    );
};