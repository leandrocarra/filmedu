import React from 'react'

import HeaderDetail from './Header'
import Tabs from './Tabs'
import Related from './Related'

const Content = () => {
  return (
    <div className="detail__content">
      <HeaderDetail />
      <Tabs />
      <Related />
    </div>
  );
}

export default Content
