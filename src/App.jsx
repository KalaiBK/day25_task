import { useState } from 'react'
import React from 'react'
import Createtodo from './Createtodo'
import Filter from './Filter'
import Card from './Card'


function App() {

const [cardobj, setCardobj] = useState([])
const [all, setAll] = useState([]);
const [edit, setEdit] = useState(false)

const [editName,  setEditName] = useState('');                           
const [editDescription,  setEditDescription] = useState('');
const [selectedIndex, setSelectedIndex] = useState(0);

const getChild = (name,description) => {

  const obj = {name, description, status: false}
  // console.log(obj)
  let tempArray = []
  all.map(cards => {
    tempArray.push(cards)
  })
  tempArray.push(obj)
  // all.push(tempArray)
  setAll(tempArray)
  // console.log(all)
  // console.log(tempArray)
  setCardobj(tempArray)
}

const handleDelete = (id) => {

  const newTodo = all.filter((card) => card.name != id);
  // setAll(all.filter(card => {
  //     return card.name != id;
  // }));
  setAll(newTodo);
  setCardobj(newTodo);

  console.log("deleted")

}

const handleStatus = (id) => {
let arr =[];
for(let card of cardobj){
  if(card.name == id){
      card.status = !card.status
  }
  arr.push(card);
}
setCardobj(arr);

}

const handleAll = () => {
  return setCardobj(all);
}

const handleCompleted = () => {
  setCardobj (all.filter(card =>{
    return card.status != false;
 }))

}

const handleNotcompleted = () => {
  setCardobj(all.filter(card => {
    return card.status != true;
  }))
}

const handleEdit = (id) => {
  setEdit(true)
  for(let [index,card] of all.entries()){
   if (card.name == id){
    setSelectedIndex(index)
    setEditName(card.name)
    setEditDescription(card.description)
  } 
}
}

const handleUpdate = (name, description) => {
setEdit(false)
let updatedCard = all[selectedIndex]
updatedCard.name = name;
updatedCard.description = description
console.log(updatedCard)
// all.splice(selectedIndex, 1);
// all.splice()
// console.log(all)
}

  return (
    <div>
      <Createtodo func={getChild} edit={edit} handleUpdate={handleUpdate} editName={editName} editDescription={editDescription}/>
      <Filter handleAll={handleAll} handleCompleted={handleCompleted} handleNotcompleted={handleNotcompleted} status={all}/>
      <Card cards={cardobj} handleStatus={handleStatus} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default App
