# プロダクトの紹介

# 工夫した点
# 苦戦した点
Next.jsを使った。事前調査通り画面遷移が簡単にできた。<br>
ただし、使いこなせていない。生のReactを書いているような感じになってしまった。<br>

TypeScriptを使った。型指定ができて安全になるが、<br>
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


Readmeの書き方
https://docs.github.com/ja/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
<br>
