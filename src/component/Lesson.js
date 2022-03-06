import React from 'react'

const lesson = (props) => {
  console.log(props.text)
  console.log(props.count)
  return (
    <div className='container'>
      <div className='row'>
        <button className='btn' onClick={() => props.setCount(props.count - 1)}>
          {props.text + " -"}
        </button>
        <h3 className='txt'>{props.count}</h3>
        <button className='btn' onClick={() => props.setCount(props.count + 1)}>
          {props.text + " +"}
        </button>
      </div>
      <div className='row2'>
        <button className='btn3' onClick={() => props.setCount(props.count * 0)}>
          {props.text2}
        </button>
      </div>

    </div>

  )
}

export default lesson