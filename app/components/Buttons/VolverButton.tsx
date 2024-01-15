'use client'

import { useRouter } from "next/navigation";
import React from "react";

const VolverButton = () => {
  const router = useRouter();

  return (
    <div>
      <button className="btn btn-info" onClick={router.back}>Volver</button>
    </div>
  )
};

export default VolverButton;
