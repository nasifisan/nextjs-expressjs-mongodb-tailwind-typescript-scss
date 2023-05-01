import Head from 'next/head'
import { useEffect } from 'react'


export default function Home() {

  const fetchUserData = () => {
    fetch("/api/example")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log("data ->> ", data.name);
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-between p-24 text-black main-container">
        Hello World!!
      </section>
    </>
  )
}
