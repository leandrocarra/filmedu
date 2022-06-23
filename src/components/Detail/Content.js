import React from 'react'

import HeaderDetail from './Header'
import Tabs from './Tabs'
import Related from './Related'

const Content = (movie) => {
  return (
    <div className="detail__content">
      <HeaderDetail
        title={movie.title}
        vote={movie.vote_average}
        date={movie.release_date}
        site={movie.homepage}
        runtime={movie.runtime}
      />
      <Tabs
        description={movie.overview}
        status={movie.status}
        company={movie.production_companies}
      />
      <Related />
    </div>
  );
}

export default Content
