import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import Character from '@/interfaces/character'

type Props = {
  item?: Character
  errors?: string
}

const CharacterDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail character={item} />}
    </Layout>
  )
}

export default CharacterDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // Add more paths as needed
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    
    const id = params?.id
    const response = await fetch(`http://localhost:3000/api/characters/${id}`);
    const item: Character = await response.json();
    console.log(id);
    // By returning { props: item }, the CharacterDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
