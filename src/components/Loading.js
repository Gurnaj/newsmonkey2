import React from 'react'
import loading from './loading-2.gif'

export default function Loading() {
    return (
      <div className="text-center d-flex justify-content-center align-items-center">
        <img src={loading} alt="Loader"></img>
      </div>
    )
}