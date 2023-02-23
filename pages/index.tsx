import type {NextPage} from'next'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Button } from './components/button'
import { Footer } from './components/footer'
import { Janken } from './blog/janken';


import Link from 'next/link'
import { Sidebar } from './components/sidebar';
const H1 = styled.h1`
  color:red;`

const Home: NextPage = () => {
  return(
    <>
      <Footer/>
      <main>
        <SSidebar />
        <Sidebar />
      </main>

        {/* <div className={styles.container}>
          <main className={styles.main}>
            <Button title="こんにちは" />

            <H1 className='bg-violet-700'>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </H1> */}


        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/janken">
          <a>aaa</a>
        </Link>
    </>
    )
}
export default Home

const SSidebar = styled.div`
    width:1/3;
    background-color:blue;
    height:100%;
`