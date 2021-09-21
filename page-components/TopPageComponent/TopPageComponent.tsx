import { HhData, Htag, Tag, Advantages } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import React from "react";
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='gray' size='m'>{products.length}</Tag>}
                <span>сортировка</span>
            </div>
            <div>
                {products && products.map(p => <div key={p._id}>{p.title}</div>)}
            </div>
            <div className={styles.hhtitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                {products && <Tag color='red' size='m'>hh.ru</Tag>}
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} />}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <Htag tag='h2' className={styles.skillstitle}>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color='primary' className={styles.tag}>{t}</Tag>)}
        </div>
    );
};