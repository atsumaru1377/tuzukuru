/** @jsxRuntime classic */
/** @jsx jsx */

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from './components/header'
import SideBar from './components/globalNav'
import {css} from '@emotion/react'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <SideBar/>
      <div css ={css`
      
      `
      }>
      </div>
    </>
  )
}

export default Home
