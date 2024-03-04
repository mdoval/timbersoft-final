'use client'

import React, { FC } from 'react'
import { CSVLink } from 'react-csv'

interface DownloaderProps {
    datos: any[]
}

const Downloader: React.FC<DownloaderProps> = ({datos}) => {
  //console.log(datos)
  return (
    <CSVLink className='btn btn-info' data={datos}>Descargar en CSV</CSVLink>
  )
}

export default Downloader