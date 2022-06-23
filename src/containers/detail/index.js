import React from 'react'
import Detail from '../../components/Detail'
import DetailProvider from '../../context/DetailContext'

import '../../style/detail.scss'
 
const DetailContainer = () => {
  return (
    <DetailProvider>
      <Detail />
    </DetailProvider>
  );
}
 
export default DetailContainer;
