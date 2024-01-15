import React, { FC } from 'react'
import Link from 'next/link'

interface Props {
    remitoId: number | undefined
}

const ViewRemito: FC<Props> = ({remitoId}) => {

  return (
    <div>
        <Link className='btn btn-primary' href={`/dashboard/remitos/${remitoId}`}>Ver Remito</Link>
    </div>
  )
}

export default ViewRemito