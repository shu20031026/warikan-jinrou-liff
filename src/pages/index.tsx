import type { Liff } from "@line/liff"
import type { NextPage } from "next"
import Head from "next/head"
import { useState, useEffect } from "react"
import styles from "~/styles/Home.module.css"

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({ liff, liffError }) => {
  console.log(liff)
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-bg-500">create-liff-app</h1>
        <p className="font-bold">hoge</p>
        {liff && (
          <div>
            <p>LIFF init succeeded.</p>
            <p>{JSON.stringify(liff.getContext())}</p>
            <p>#2</p>
          </div>
        )}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
        <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
          LIFF Documentation
        </a>
      </main>
    </div>
  )
}

export default Home
