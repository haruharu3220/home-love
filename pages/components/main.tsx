import { NodeWithTypeArguments } from "typescript";
import { Card } from "./card";

type MainProps = {
  data: {
    title: string;
    content: string;
    attribute: string;
    user: string; //投稿者の名前
    date: Date; //投稿日時
  }[];
};

export const Main: React.FC<MainProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-start w-2/3 bg-yellow-300">
      {data.map((item) => (
        <Card
          key={item.title} //keyは必須
          title={item.title} //タイトル
          content={item.content} //本文
          attribute={item.attribute} //カテゴリー
          user={item.user} //投稿者の名前
          date={item.date} //投稿日時
        />
      ))}
    </div>
  );
};
