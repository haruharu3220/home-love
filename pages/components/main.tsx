import { Card } from './card'


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