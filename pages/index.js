import Head from 'next/head'
import Layout from '../components/layout'
import Articles from '../components/articles'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Articles />
    </Layout>
  )
}
