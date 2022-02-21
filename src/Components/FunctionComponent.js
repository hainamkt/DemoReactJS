import React from 'react'
// rfc: cách tạo nhanh function component

export default function FunctionComponent() {



  // Lệnh return trả về UI của component
  // Chỉ chứa 1 thẻ cha bên ngoài 
  return (
    // div trong reactjs là thành phần JSX
    <div className="testClass">
      FunctionComponent
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, obcaecati.</p>
    </div>
  )
}
