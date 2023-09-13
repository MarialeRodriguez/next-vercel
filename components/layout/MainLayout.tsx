import { Inter } from 'next/font/google'
import Head from "next/head";
import styles from "./MainLayout.module.css";
import { Navbar } from "../Navbar";
import { FC, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {

    return (
        <div className={ styles.container }>
          
          <Head>
            <title>Home - Maria R</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={`${styles.main} ${inter.className}`}>
    
            {children}
          
          </main>
        </div>
      )
}

