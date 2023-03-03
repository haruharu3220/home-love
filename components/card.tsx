type CardProps = {
  title: string;
  content: string;
  attribute: string;
  user: string;
  date: Date;
};

export const Card: React.FC<CardProps> = (props) => {
  //propsを分割代入
  const { title, content, attribute, user, date } = props;

  return (
    <div className="flex-none m-4 w-36 h-36 bg-gray-300 rounded-lg text-center">
      <h3>{title}</h3>
      <p>{attribute}</p>
      <p>{user}</p>
      {/* <p>{date.toLocaleDateString()}</p> */}
    </div>
  );
};
