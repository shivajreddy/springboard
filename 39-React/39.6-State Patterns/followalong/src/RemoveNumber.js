import React, {useState} from 'react'

function RemoveNumber(props) {

  const [all_numbers, setAllNumbers] = useState(
    props.all_numbers.map((num, idx)=>{
      return(
        <li key={idx}>{num}<button onClick={()=>delete_button(num)}>-</button></li>
      )
    })
  );

  function delete_button(id) {
    console.log('dele tb', id)
    setAllNumbers(prevState => {
      const all_nums = [...prevState]
      return all_nums.filter(item=>item!==id)
    })
  }

  // const all_buttons = all_numbers.map((num,idx)=>{
  //   return(
  //     <li key={idx}>{num} <button onClick={()=>delete_button(idx)}>-</button></li>

  //   )
  // })
  

  return (
    <>
      <ul>
        {all_numbers}
      </ul>
    </>
  )
}

export default RemoveNumber