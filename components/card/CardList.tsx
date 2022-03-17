import Card from "../../models/card";
import CardItem from "./CardItem";


interface CardProps {
  cards: Card[] | undefined;
}

const CardList: React.FC<CardProps> = ({ cards }) => {

  return (
    <>
      {
        cards && cards.map(card => (
          <CardItem key={card.id} card={card} />
        ))
      }
    </>
  )

}

export default CardList;