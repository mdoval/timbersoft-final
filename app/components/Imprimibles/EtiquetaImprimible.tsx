import Image from 'next/image'
import React from 'react'

const EtiquetaImprimible = () => {
  return (
    <div className='w-full h-80 bg-red-200'>
      <Image src="/images/kerflogo.jpg" height={150} width={150} alt='logo' />
    </div>
  )
}

export default EtiquetaImprimible