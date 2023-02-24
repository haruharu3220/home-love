import type {NextPage} from'next'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Button } from './components/button'
import { Footer } from './components/footer'
import { Sidebar } from './components/sidebar';
import { Main } from './components/main'
import axios from 'axios';


const H1 = styled.h1`
  color:red;`

//Postの型だけ定めたインターフェースを定義
interface Post {
  title: string;
  content: string;
  attribute: string;
}

export const fetchData = async (): Promise<Post[]> => {
  const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=20');
  const data = response.data.hits;
  //map()を使ってtitleとcontentのみを抽出
  const posts = data.map((item: any) => ({
    title: item.title,
    content: item.url,
    attribute: ['キッチン', 'リビング', '洗面','風呂'][Math.floor(Math.random() * 4)]
  }));
  return posts;
};


//本当はここは自作APIサーバと繋いでDBから登録済みのデータをとってきたかった
// const data = [
//   { title: "Card 1", attribute: "キッチン" },
//   { title: "Card 2", attribute: "リビング" },
//   { title: "Card 3", attribute: "リビング" },
//   { title: "Card 4", attribute: "洗面" },
//   { title: "Card 5", attribute: "キッチン" },
//   { title: "Card 6", attribute: "リビング" }
// ];


const Home: NextPage = () => {
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [data, setData] = useState<Post[]>([]);
  //attributeはsidebarコンポーネントでこの関数を呼び出す時に設定する変数

  const handleButtonClick = (attribute:string) => {
    // alert(attribute);
    setSelectedAttribute(attribute);
  };

  //押したボタンによって文字列がselectedAttributeに格納される
  //selectedAttributeがtrue(=存在する)場合、data配列から
  //selectedAttributeと同じattributeを持っているものをフィルターしてfilteredData配列に格納する
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetchData();
      setData(posts);
    };
    fetchPosts();
  }, []);


  const filteredData = selectedAttribute && selectedAttribute!="全体"
    ? data.filter((item) => (item.attribute === selectedAttribute))
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
`;