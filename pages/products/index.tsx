import Head from 'next/head';
import React from 'react'
import CardList from '../../components/card/CardList';
import Layout from '../../components/layout';
import Card from '../../models/card';

interface CardProps {
  total: number;
  skip: number;
  limit: number;
  cards: Card[] | undefined,
}

interface Data {
  data: CardProps
}

const Home: React.FC<Data> = ({ data }) => {

  //console.log(data);
  //console.log(cards);
  //console.log(total);
  //console.log(skip);
  //console.log(limit);


  //?????Buradaki hatayı gelen json datasındaki isim ile benim interface verdiğim değişken adından ötürü yakıyor, doğru mu
  const cards = data.products;

  return (
    <>
      <Head>
        <title>Products Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <CardList
              parentUrlPath='products'
              total={data.total}
              skip={data.skip}
              cards={cards}
              limit={data.limit} />
          </div>
        </div>
      </Layout>
    </>
  )
}



export async function getServerSideProps(context) {
  const request = await fetch('https://dummyjson.com/products');
  const data: Data = await request.json();

  //const result = await request.json();
  //const cards = await result.products;
  // const total = await result.total;
  //const skip = await result.skip;
  //const limit = await result.limit;

  return {
    props: {
      data,
      //cards,
      //total,
      //skip,
      //limit
    }
  }
}


export default Home;