import Head from 'next/head'
import LayoutV2 from '../components/layoutv2'
import Articles from '../components/articles'
import { connectToDatabase } from '../util/mongodb'

export default function Home({articles}) {
console.log(articles);

  return (
    <LayoutV2>
      <Head>
        <title>Home</title>
      </Head>
      <Articles data={articles} />
    </LayoutV2>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const articles = await db
      .collection("Next_integration_mockdata")
      .find({})
      .limit(10)
      .toArray();
  
  return {
      props: {
          articles: JSON.parse(JSON.stringify(articles)),
      },
  };
}
