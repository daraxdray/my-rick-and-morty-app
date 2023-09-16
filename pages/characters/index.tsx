import { GetStaticProps } from 'next'
import Link from 'next/link'
import { User } from '../../interfaces'
import Layout from '../../components/Layout'
import List from '../../components/List'
import Character from '../../interfaces/character'
const BASEURL = "localhost:3001";
type Props = {
  items: Character[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Character List | Next.js + TypeScript Example">
    <h1>Character List</h1>
  
    <p>You are currently on: /character List</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/characters');
  const items: Character[] = await response.json();

  return { props: { items } }
}

export default WithStaticProps
