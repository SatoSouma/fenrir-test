import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = ({}) => {
  // 現在地はglobalstateに保存するべきかも
  const [currentLocation, setCurrentLocation] = useState<string>('')
  //geoLocationが取得できたか否か
  const [glFlug, setGlFlug] = useState<boolean>(false)

  useEffect(() => {
    if ('geolocation' in navigator) {
      setGlFlug(true)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Restaurant Search</title>
      </Head>
      <p>{String(glFlug)}</p>
    </>
  )
}

//SSG
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Home
