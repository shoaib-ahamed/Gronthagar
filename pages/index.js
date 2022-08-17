import Head from 'next/head'
import React, { useState } from 'react'
import ProductItem from '../components/product/ProductItem'
import { getData } from '../utils/fetchData'

const Home = (props) => {

  const [products, setProducts] = useState(props.products)


  return (
    <div>
      <Head>
          <title>Home</title>
      </Head>

      <div style={{display: 'grid' , textAlign: 'center' , paddingTop: '10px'}}>
      <div>
        <h3> <strong>বই পরুন জ্ঞান অর্জন করুন</strong> </h3>
      </div>
      
      <div className="products">
      {
        products.length === 0
        ? <h2> no products </h2>
        : products.map(product =>(
          <ProductItem key={product._id} product={product} />
        ))
      }
      </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await getData('product')

  return {
    props: {
      products : res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}

export default Home