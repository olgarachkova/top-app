import cn from 'classnames';
import { useState } from 'react';

import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/router';


export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const router = useRouter();

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: searchQuery
            }
        });
    };

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key == 'Enter') handleSearch();
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                placeholder='Поиск...'
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                onKeyDown={handleKeydown}
                className={styles.input} />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={handleSearch}>
                <GlassIcon />
            </Button>
        </div>
    );
};