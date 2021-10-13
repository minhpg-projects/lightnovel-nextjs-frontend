import Head from 'next/head'
import Navbar from '../components/shared/navbar'
import Alert from '../components/shared/alert'

import Footer from '../components/shared/footer'

import CardList from '../components/home/cardList'
import SlideList from '../components/home/slideList'
import Discussions from '../components/home/discussions'
import Stats from '../components/home/stats'

const Home = () => {
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div class="flex flex-col min-h-screen">
        <Navbar />
        <div class="flex-grow container p-1 sm:mx-auto md:mx-auto lg:mx-auto mb-5">
          <Alert />
          <div class=" grid grid-cols-12 gap-4 grid-auto-row mt-5">
            <div class="col-span-12 lg:col-span-9">
              <SlideList />
            </div>
            <div class="col-span-12 lg:col-span-3">
              <Discussions />
            </div>
          </div>
          <div class=" grid grid-cols-12 gap-4 grid-auto-row mt-5">
            <div class="col-span-12 lg:col-span-9">
              <CardList />

            </div>
            <div class="col-span-12 lg:col-span-3">
              <Stats />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home