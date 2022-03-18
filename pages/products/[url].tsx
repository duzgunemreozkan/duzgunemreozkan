import Head from 'next/head';
import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Card from '../../models/card';

interface CardProps {
  card: Card;
}

const ProductDetail: React.FC<CardProps> = (props) => {
  //console.log(params);

  return (
    <>
      <Head>
        <title>Product Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        {props.card.id} <br />
        {props.card.title} <br />
        {props.card.description} <br />
      </Layout>
    </>
  )
}


export default ProductDetail;


export async function getServerSideProps({ params }) {
  const request = await fetch(`https://dummyjson.com/products/${params.url}`)
  const card = await request.json();

  return {
    props: {
      params,
      card
    }
  }
}