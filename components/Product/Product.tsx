import cn from 'classnames';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { priceRu, declOfNum } from '../../helpers/helpers';
import { Card, Rating, Tag, Button, P, Divider, Review, ReviewForm } from '..';
import Image from 'next/image';
import { useRef, useState } from 'react';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    const [isReviewsOpened, setIsReviewsOpened] = useState(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReviews = () => {
        setIsReviewsOpened(true);
        reviewRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className={className} {...props}>
            <Card color='white' className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70} />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles.saleprice} color='green' size='s'>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{priceRu(product.credit)}</div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>{product.categories.map(cat => <Tag key={cat} color='ghost' size='s' className={styles.category}>{cat}</Tag>)}</div>
                <div className={styles.pricetitle}>цена</div>
                <div className={styles.credittitle}>в кредит</div>
                <div className={styles.reviewtitle}><a href='#reviews' onClick={scrollToReviews}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
                <Divider className={styles.hr} />
                <P className={styles.description}>{product.description}</P>
                <div className={styles.feature}>{product.characteristics.map(ch => (
                    <div key={ch.name} className={styles.characteristics}>
                        <span className={styles.characteristicsName}>{ch.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{ch.value}</span>
                    </div>
                ))}</div>
                <div className={styles.advblock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advtitle}>Преимущества</div>
                        {product.advantages}
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advtitle}>Недостатки</div>
                        {product.disadvantages}
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button
                        appearance='primary'
                        className={styles.reviewbutton}
                    >Узнать подробнее
                    </Button>
                    <Button
                        appearance='ghost'
                        arrow={isReviewsOpened ? 'down' : 'right'}
                        onClick={() => setIsReviewsOpened(!isReviewsOpened)}>
                        Читать отзывы
                    </Button>
                </div>
            </Card>
            <Card
                color='blue'
                className={cn(styles.reviews, {
                    [styles.opened]: isReviewsOpened,
                    [styles.closed]: !isReviewsOpened
                })}
                ref={reviewRef}>
                {product.reviews && product.reviews.map(r =>
                    <div key={r._id}>
                        <Review review={r} />
                        <Divider className={styles.reviewDivider} />
                    </div>
                )}
                <ReviewForm productId={product._id} />
            </Card>
        </div>
    );
};