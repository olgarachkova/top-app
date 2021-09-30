import CoursesIcon from './icons/courses.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { useEffect, useState } from 'react';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses }
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

export const useScrollY = (): number => {
    const [scrollY, setScrollY] = useState<number>(0);
    const isBrowser = typeof window !== undefined;

    const handleScroll = () => {
        const currentScrollY = isBrowser ? window.scrollY : 0;
        setScrollY(currentScrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => { window.removeEventListener('scroll', handleScroll) };
    }, []);
    return scrollY;
}