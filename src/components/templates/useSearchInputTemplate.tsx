import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function useSearchInputTemplate() {
  const router = useRouter()

  function clickMove(latitude: number, longitude: number, range: string) {
    router.push({
      pathname: '/SearchResult', //URL
      query: { latitude: latitude, longitude: longitude, range: range }, //検索クエリ
    })
  }

  return [clickMove] as const
}
