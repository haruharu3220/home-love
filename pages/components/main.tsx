import { Card } from './card'


type MainProps = {
    data: {title: string, attribute: string}[];
  }

export const Main: React.FC<MainProps> = ({ data }) => {
    return (
      <div>
        <h2>Main</h2>
        {data.map((item) => (
          <Card key={item.title} title={item.title} attribute={item.attribute} />
        ))}
      </div>
    );
  };