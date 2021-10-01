import { GetStaticProps } from "next";
import React from "react";
import axios from 'axios';

import { Htag, P, Card } from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";
import { firstLevelMenu } from '../helpers/helpers';
import Link from "next/link";
import styles from './index.module.css';

function Home({ menu }: HomeProps): JSX.Element {
  return (
    <>
      {firstLevelMenu.map(menuItem => (
                    <div key={menuItem.route}>
                      <Htag tag='h1' className={styles.headtext}>Читать отзывы про <span className={styles.headtextItem}>{menuItem.name}</span> по направлениям:</Htag>
                        <div className={styles.cards}>
                            {menu.map(m=>
                                  <Card color='white' key={m._id.secondCategory} className={styles.card}>
                                    <P size='l'>{m._id.secondCategory}</P>
                                    {m.pages.map(p=>
                                          <P size='s' key={p.alias}>
                                              <Link href={`/${menuItem.route}/${p.alias}`}>
                                                  <a>
                                                    {p.category}
                                                  </a>
                                              </Link>
                                          </P>)}
                                  </Card>)}
                        </div>
                    </div>
      ))}
      
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}