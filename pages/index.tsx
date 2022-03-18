import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'


//????Buradaki type ve PropsWithChildren şeklindeki atama ne işe yarıyor.
//type CardProps = PropsWithChildren<SpacingProps<Theme> & VariantProps<Theme, "


function Home() {

  return (
    <>
      <Head>
        <title>Products & Marvell Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <h1>Choose Gallery</h1>
            <hr />
            <Link href='/products'><a href='/products'>Products</a></Link>
            <Link href='/marvell'><a href='/marvell'>Marvell</a></Link>
          </div>
        </div>
      </Layout>
    </>
  )
}


export default Home;