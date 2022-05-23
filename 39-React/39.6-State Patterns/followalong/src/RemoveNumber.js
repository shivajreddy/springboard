import React, {useState} from 'react'

function RemoveNumber(props) {

  const [all_numbers, setAllNumbers] = useState(props.all_numbers);

  function delete_button(num) {
    console.log('dele tb', num)
    setAllNumbers(props.all_numbers.filter(item=>item!==num))
  }

  const all_buttons = all_numbers.map((num,idx)=>{
    return(
      <li key={idx}>{num} <button onClick={()=>delete_button(num)}>-</button></li>

    )
  })

  

  return (
    <>
      <ul>
        {all_buttons}

      </ul>
    </>
  )
}

export default RemoveNumber