import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import CardList from '../components/card/CardList';

function Home({ cards, total, skip, limit }) {

  //console.log(cards);
  console.log(total);
  console.log(skip);
  console.log(limit);

  return (
    <>
      <Head>
        <title>Products & Marvell Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <CardList cards={cards} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const request = await fetch('https://dummyjson.com/products');
  const result = await request.json();
  const cards = await result.products;
  const total = await result.total;
  const skip = await result.skip;
  const limit = await result.limit;

  return {
    props: {
      cards,
      total,
      skip,
      limit
    }
  }
}


export default Home;