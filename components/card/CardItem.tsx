import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../../models/card';

interface CardProps {
  parentUrlPath: string;
  card: Card;
}

const CardItem: React.FC<CardProps> = (props) => {

  const parentUrlPath = props.parentUrlPath;
  const card = props.card;

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <Image width={300} height={250} className="card-img-top" src={card.thumbnail} alt={card.title} title={card.title} />
        <div className="card-body">
          {card.title && <h5 className="card-title">{card.title}</h5>}
          <Link href={`/${parentUrlPath}/${card.id.toString()}`}>
            <a title={card.title} className="btn btn-primary">Git</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {
          `
    .card {
      margin-bottom:25px;
    }
    `
        }
      </style>
    </>
  )

}

export default CardItem;