import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState,useCallback} from "react"


function App() {
  const [img, setImg]=useState(null)
  const [avatar, setAvatar]=useState(null)
  const sendFile = useCallback(async()=>{

    try{
const data=new FormData()
console.log(data)
  data.append('avatar',img)
  console.log(data)
  await axios.post('/api/upload',data,{
    headers:{
      'content-type':'mulpipart/form-data'
    }
  })
.then(res=>setAvatar(res.data.path))
    }catch(e){}
  },[img])
  return (
    <div style={{
      display:"flex",
      flexDirection:"column"
    }}>
    

     
      <input type="file" onChange={e=>setImg(e.target.files[0])}/>
      <button onClick={sendFile}>Добавить</button>
      <h3>База фотографий:</h3>
      <div>
        {

          avatar
          ? <img style={{
            width:"300px",
            height:"auto"
          }} src={`${avatar}`} alt="" />
          :<img style={{
            width:"300px",
            height:"auto"
          }} src={`${logo}`} alt="" />
        }
      
      </div>
   
    </div>
    
  );
}

export default App;
