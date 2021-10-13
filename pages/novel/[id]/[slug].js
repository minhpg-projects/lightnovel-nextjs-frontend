import { useRouter } from 'next/router'
import Head from 'next/head'

import Navbar from '../../../components/shared/navbar'
import Alert from '../../../components/shared/alert'
import Footer from '../../../components/shared/footer'

import Main from '../../../components/novel/main'
import Author from '../../../components/novel/author'
import SideNotes from '../../../components/novel/sidenotes'
import ChapterList from '../../../components/novel/chapters'

const Novel = (props) => {
  const router = useRouter()
  const { slug, id } = router.query

  return <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container p-1 sm:mx-auto md:mx-auto lg:mx-auto mb-5">
        <Alert />
        <div className=" grid grid-cols-12 gap-4 grid-auto-row">
          <main className="col-span-12 lg:col-span-9">
            <Main {...props} />
            <ChapterList {...props} />
          </main>
          <aside className="col-span-12 lg:col-span-3">
            <Author {...props} />
            <SideNotes {...props} />
          </aside>
        </div>

      </div>
      <Footer />

    </div>

  </>
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:1337/novels/1`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMyNDgxOTc5LCJleHAiOjE2MzUwNzM5Nzl9.6NWmaBFs6NJroa6cEgLcIKeOqYSWmtXjGAK-wZ0_xx0'
    }
  })
  const data = await res.json()
  console.log(data)

  if (!data) {
    return {
      notFound: true,
    }
  }
  const arcs = []
  for(const arc of data.arcs) {
    const arc_req = await fetch(`http://localhost:1337/arcs/${arc.id}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMyNDgxOTc5LCJleHAiOjE2MzUwNzM5Nzl9.6NWmaBFs6NJroa6cEgLcIKeOqYSWmtXjGAK-wZ0_xx0'
      }
    })
    const arc_data = await arc_req.json()
    arcs.push(arc_data)
  }
  data.arcs = arcs
  return {
    props: data, // will be passed to the page component as props
  }
}

export default Novel