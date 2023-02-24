type CardProps = {
    title: string;
    attribute: string;
  }
  
export const Card: React.FC<CardProps> = ({ title, attribute }) => {
    return (
      <div style={{ display: "inline-block", margin: "10px", width: "200px", height: "100px", backgroundColor: "lightgray", borderRadius: "5px", textAlign: "center" }}>
        <h3>{title}</h3>
        <p>{attribute}</p>
      </div>
    );
  };