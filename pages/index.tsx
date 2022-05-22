import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { SearchInputTemplate } from 'src'

const Home: NextPage = ({}) => {
  // 現在地はglobalstateに保存するべきかも
  // 緯度
  const [latitude, setLatitude] = useState<number>(0)
  // 経度
  const [longitude, setLongitude] = useState<number>(0)

  // geoLocationのoptionの設定
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  }

  useEffect(() => {
    // 現在地を取得
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error, options)
    }
  }, [])

  // 現在地取得成功時の関数
  function success(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }

  // 現在地取得失敗時の関数
  function error() {
    alert('位置情報が利用できません。')
  }

  return !!latitude ? (
    <>
      <Head>
        <title>Restaurant Search</title>
      </Head>
      <SearchInputTemplate latitude={latitude} longitude={longitude} />
    </>
  ) : (
    <></>
  )
}

//SSG
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Home
