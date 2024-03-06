'use client'

import { FC } from 'react';
import Barcode from 'react-barcode';

interface CodigoDeBarrasProps {
  dato: string
}

const CodigoDeBarras: FC<CodigoDeBarrasProps> = ({dato}) => {
  return (
    <Barcode value={dato} />
  )
}

export default CodigoDeBarras