import type {NextPage} from'next'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Button } from './components/button'
import { Footer } from './components/footer'
import Link from 'next/link'
import { Sidebar } from './components/sidebar';
import { Main } from './components/main'

const H1 = styled.h1`
  color:red;`

const data = [
  { title: "Card 1", attribute: "キッチン" },
  { title: "Card 2", attribute: "リビング" },
  { title: "Card 3", attribute: "リビング" },
  { title: "Card 4", attribute: "洗面" },
  { title: "Card 5", attribute: "キッチン" },
  { title: "Card 6", attribute: "リビング" }
];


const Home: NextPage = () => {
  const [selectedAttribute, setSelectedAttribute] = useState("");

  const handleButtonClick = (attribute:string) => {
    setSelectedAttribute(attribute);
  };

  const filteredData = selectedAttribute
    ? data.filter((item) => item.attribute === selectedAttribute)
    : data;

  return(
    <>
      <Footer/>
      <main className="flex">
        {/* サイドバーコンポーネントのpropsにこのファイルで定義した関数を入れる */}
        <Sidebar onButtonClick={handleButtonClick} />
        <Main data={filteredData} />
      </main>



        {/* <div className={styles.container}>
          <main className={styles.main}>
            <Button title="こんにちは" />

            <H1 className='bg-violet-700'>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </H1> */}


        {/* <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/janken">
          <a>aaa</a>
        </Link> */}
    </>
    )
}
export default Home

const SSidebar = styled.div`
    width:1/3;
    background-color:blue;
    height:100%;
`