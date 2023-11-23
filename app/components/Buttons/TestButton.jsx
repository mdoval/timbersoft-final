"use client";

import { useState } from "react";

export function TestButton({text, onclick}) {
  return (
      <button className="h-12 bg-blue-500 text-white rounded-lg shadow-lg" onClick={onclick} >
        <span className="mr-12 ml-12">{text}</span>
      </button>
  )
}