<h1 align="center">プロダクトの紹介 👋</h1>

卒業制作のフロント側を実装しました。 <br>
家の設備ごとにカードを持っていて、サイドバーのボタンをクリックすると該当する設備のカードが出てきます。 <br>
本当は自作APIサーバを立てて、コメントや画像を記入→DBに登録→APIで呼び出してフロント(Next.js)で表示 <br>
までやりたかったのですが、APIサーバは開発できず、<br>
代わりにハッカーニュースAPIというAPIを使いました。<br>



今回使用した技術<brs>
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a>
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>


サーバサイドはExpressを検討予定。<br>
Larabelはなんでもできるけどリッチすぎて締切までに使いこなせるようになる気がしない。。。<br>

将来的には以下をやりたいです。<br>
・カードごとにチャットができる
・いいね機能を追加できる
・ログイン機能を作成し、投稿ユーザをカードに記入できる
・カードの削除、修正ができる




# 工夫した点
# 苦戦した点
Next.jsを使った。事前調査通り画面遷移が簡単にできた。<br>
ただし、使いこなせていない。生のReactを書いているような感じになってしまった。<br>

- [x]TypeScriptを使った。<br>
型指定ができて安全になるが、<br>
いざ使ってみようと思うと癖があってなれなかった。<br>
以下のコードでpropsに渡すオブジェクト配列の型を指定することができたが、
この実装ができるまで結構詰んでいた。
```TypeScript
type MainProps = {
    data: {title: string, content: string, attribute: string}[];
  }

export const Main: React.FC<MainProps> = ({ data }) => {
    return (
      <div className='flex flex-wrap justify-start w-2/3 bg-yellow-300'>
        {data.map((item) => (
          <Card key={item.title} title={item.title} attribute={item.attribute} />
        ))}
      </div>
    );
  };

```




Next.js13でLinkのchildrenにaタグが基本禁止になったりと<br>
自分が参考にしていた資料とNext.jsのバージョン違いで詰んだ<br>





TypeScliptで型指定<br>
https://dev-k.hatenablog.com/entry/typescript-with-react-props-tutorial-dev-k




Next.js13(2022年10月~)からLink内のaタグ禁止<br>
https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
<br>
https://qiita.com/IYA_UFO/items/f13577bad7dd9ef1ae89
<br>


tailwindCSSの無料UIキット
https://www.tailwind-kit.com/
<br>

ハッカーニュースAPI<br>
https://github.com/HackerNews/API
<br>


Readmeの書き方
https://docs.github.com/ja/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
<br>
https://style.potepan.com/articles/33682.html
<br>
