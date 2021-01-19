import Head from 'next/head'
import Layout from '../components/layout'
import LayoutV2 from '../components/layoutv2'
import Articles from '../components/articles'

export default function Home() {
  return (
    <LayoutV2>
      <Head>
        <title>Home</title>
      </Head>
    </LayoutV2>
  )
}
