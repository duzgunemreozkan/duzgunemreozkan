import Card from "../../models/card";
import CardItem from "./CardItem";

interface CardProps {
  parentUrlPath: string;
  total: number;
  skip: number;
  limit: number;
  cards: Card[] | undefined,
}

function compareTitles(a, b) {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}


const CardList: React.FC<CardProps> = ({ parentUrlPath, total, skip, limit, cards }) => {

  //console.log(data);
  //console.log(cards);
  //console.log(total);
  //console.log(skip);
  //console.log(limit);

  return (
    <>
      {
        cards && cards.sort((a, b) => compareTitles(a.title, b.title)).map(card => (
          <CardItem
            key={card.id}
            parentUrlPath={parentUrlPath}
            card={card} />
        ))
      }
    </>
  )
}

export default CardList;