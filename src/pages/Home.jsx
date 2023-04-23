import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
const Home = () => {
  return (
    <>
        <Main />
        <Row rowId="1" title="Up Coming" fetchUrl= {requests.requestTopRated}/>
        <Row rowId="2" title="Popular" fetchUrl= {requests.requestPopular}/>
        <Row rowId="3" title="Trending" fetchUrl= {requests.requestTrending}/>
    </>
  )
}

export default Home