import React, { useState } from 'react'
import NumberItem from './NumberItem';


function RemoveNumber(props) {

  const [all_numbers, setAllNumbers] = useState(props.all_numbers)

  const li_items = all_numbers.map((num, idx) => <li key={idx}>{num} <button onClick={() => delete_button(num)}>-</button></li>);

  function delete_button(num) {
    // console.log('dele tb', num)
    setAllNumbers(all_numbers.filter(item => item !== num))
  }

  return (
    <ul>
      {all_numbers.map((item,idx) => (
        <NumberItem
          num={item}
          key = {idx}
          remove = {evt => delete_button(item)}
        />
      ))}
      {/* {li_items} */}
    </ul>
  )
}

export default RemoveNumber
