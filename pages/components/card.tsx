type CardProps = {
    title: string;
    attribute: string;
  }
  
export const Card: React.FC<CardProps> = ({ title, attribute }) => {
    return (
        <div className="flex-none m-4 w-36 h-36 bg-gray-300 rounded-lg text-center">
            <h3>{title}</h3>
            <p>{attribute}</p>
        </div>
    );
  };