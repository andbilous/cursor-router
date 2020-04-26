import React,{useState} from 'react';
import Contact from '../components/Contact';

export const contacts =[
  {
    username:'barney',
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male"
  }, 
  {
    username:'robin',
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female"
  }, 
  {
    username:'anonimus',
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666"
  },
   {
    username:'lilia',
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, 
  {
    username:'marshen',
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male"
  }, 
  {
    username:'teodor',
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male"
  }
]


const Contacts =()=> {
  const [checked,setChecked]=useState([]);
  const [search,setSearch] = useState('');
  const [contacts]=useState([ {
    username:'barney',
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male"
  }, 
  {
    username:'robin',
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female"
  }, 
  {
    username:'anonimus',
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666"
  },
   {
    username:'lilia',
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, 
  {
    username:'marshen',
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male"
  }, 
  {
    username:'teodor',
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male"
  }])



 const handleSearchChange = (e) =>{
  setSearch(e.target.value)
}

const toggleChange = (e) =>{
  if(checked.includes(e.target.id)){
   setChecked(checked.filter(item=>item!==e.target.id));
  }else{
    setChecked([...checked,e.target.id]);
  }

}

const filterByCheckbox=arr=>{
  if(checked.includes('male')
  && 
  !checked.includes('female')
  && 
  !checked.includes('none')
  ){
   return arr.filter(contact=> contact.gender==='male')
 }

  if(checked.includes('female')
   && 
   !checked.includes('male')
   && 
   !checked.includes('none')
   ){
    return   arr.filter(contact=> contact.gender==='female')
  }

  if(checked.includes('male') && checked.includes('female')){
    return   arr.filter(contact=> contact.gender==='male' || contact.gender==='female')
  }
  if(checked.includes('female') && checked.includes('none')){
    return   arr.filter(contact=> !contact.gender || contact.gender==='female')
  }

  if(checked.includes('male') && checked.includes('none')){
    return   arr.filter(contact=> !contact.gender || contact.gender==='male')
  }

  if(checked.includes('none')
  && 
   !checked.includes('male')
   && 
   !checked.includes('female')
  ){
    return  arr.filter(contact=> !contact.gender)
  }
  return arr
}


const filterArray = arr =>{
 let filteredArr= filterByCheckbox(arr);
 console.log(filteredArr)
  if(search.toLowerCase()==='male'){
    return   filteredArr.filter(contact=> contact.gender==='male')
  }
  if(search.toLowerCase()==='female'){
    return   filteredArr.filter(contact=> contact.gender==='female')
  }
  if(search.toLowerCase()==='none'){
    return   filteredArr.filter(contact=> !contact.gender)
  }
  if(parseInt(search)){
    return   filteredArr.filter(contact=> contact.phone.toString().includes(search.toString()))
  }
    return   filteredArr.filter(contact=> contact.lastName.toLowerCase().includes(search.toLowerCase()))
}

return (
<div style={{marginLeft:'35%'}}>
    <input placeholder='Пошук' onChange={handleSearchChange}/><br/>
    <label>
      <input
          id='male'
          type="checkbox"
          checked={checked.includes('male')}
           onChange={toggleChange}
        />
        M</label>
        
        <br/>

        <label><input
         id='female'
        type="checkbox"
        checked={checked.includes('female')}
        onChange={toggleChange}
        />
        Ж</label><br/>

        <label><input
        id='none'
        type="checkbox"
        checked={checked.includes('none')}
        onChange={toggleChange}
        />
        Не вказано</label>
    <h1>Контакти</h1>
    {
    filterArray(contacts).map((contact,index) => {
      return (
        <Contact key={index} contact={contact}/>
      )
    })}
  </div>
)}

export default Contacts;
