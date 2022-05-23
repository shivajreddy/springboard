import React, {useState} from 'react'

function NumberList(props) {
  const [list, setList] = useState(props.all_numbers);
  console.log(list);

  function removeItem(num) {
    const new_list = list.filter(item => item !== num);
    setList(new_list);
  }

  return (
    <>
      <h4>All items: {list}</h4>
     <p>{props.remove_number}</p> 
     <button onClick={()=>removeItem(props.remove_number)}>Remove:{props.remove_number}</button>
    </>
  )
}

export default NumberList