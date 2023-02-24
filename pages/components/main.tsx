import { Card } from './card'

export const Main = ({ data }) => {
    return (
      <div>
        <h2>Main</h2>
        {data.map((item) => (
          <Card key={item.title} title={item.title} attribute={item.attribute} />
        ))}
      </div>
    );
  };
