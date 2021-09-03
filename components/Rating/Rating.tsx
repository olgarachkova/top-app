import { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';


export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        contructRating(rating);
    }, [rating]);

    const contructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(i + 1)}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)} />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (isEditable === false) {
            return;
        }
        contructRating(i);
    };

    const changeRating = (i: number) => {
        if (isEditable === false || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props} className={className}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    );
};