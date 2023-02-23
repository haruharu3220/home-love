import type {NextPage} from'next'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Button } from './components/button'
import { Footer } from './components/footer'
import { Janken } from './blog/janken';
import Link from 'next/link'

const H1 = styled.h1`
  color:red;`


const Home: NextPage = () => {
  return(
    <>
      <Footer/>
      <div className={styles.container}>
        <main className={styles.main}>
          <Button title="こんにちは" />

          <H1 className='bg-violet-700'>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </H1>

{/*
    <BrowserRouter>
      <h1>react app</h1>
      <Routes>
         <Route path="/janken" element={<Janken/>} /> 
      </Routes>
    </BrowserRouter>
*/}

{/* <Link href="/" passHref>
  <a>これで遷移できるはず</a>
</Link> */}

<Link href="/">
  <a>Home</a>
</Link>

<Link href="/janken">
  <a>aaa</a>
</Link>


        </main>
      </div>
    </>
    )
}
export default Home