import React from 'react'

export const Alert = (props) => {
  return (
   props.alertdata && <div className={`alert alert-${props.alertdata.type}`} role="alert">
 { props.alertdata.message}!
</div>
  )
}
