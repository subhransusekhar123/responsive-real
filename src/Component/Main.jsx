import React from 'react'

import CardContainer from './CardContainer/CardContainer'
import Search from './Search/Search'
import SecondSec from './SecondSec/SecondSec'

const Main = () => {
  return (
    <div className='main'>
      <SecondSec/>
      <Search/>
      <CardContainer/>

    </div>
  )
}

export default Main