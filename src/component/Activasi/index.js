import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Footer, Header, Spinner } from '../../component'
import API from '../../services';
import { Source } from '../../services/Config';
import axios from 'axios';


function Activasi(props) {
      const [USER, setUSER] = useState(null);
      const [TOKEN, setTOKEN] = useState(null);
      const history = useHistory();
      const [loading, setLoading] = useState(true);
      const [confirmPassword, setConfirmPassword] = useState(null)
      const [user,setUser] = useState([])
      const [datatoken, setDataToken]=useState(null);
      // const [profile, setProfile] = useState(null)
      const [form, setForm] = useState({
            id :null,
            name : null,
            password : null,
            phone :null,
            email:null,
            address:null
      })
      
      useEffect( () => {
            let isAmounted = false
            if(!isAmounted) { 
                  Promise.all([getUSER(), getTOKEN()]).then((res) => {
                        let userData = res[0];
                        let tokenData = res[1];
                        setUser(res[0]);
                        setDataToken(res[1]);
                      if(userData && tokenData !==null){
                              setForm({
                                    ...form,
                                    id : userData.id,
                                    name : userData.name,
                                    phone :userData.phone,
                                    email:userData.email,
                                    address:userData.address
                              })
                              setLoading(false)
                              
                      }else{
                        alert('mohon login terlebih dahulu')
                        history.push('/login')
                      }
                  });
           }
            return () => {
                  Source.cancel('cancel api')
                  isAmounted = true;
            }
      }, [])

      const getUSER = async () => {
            let data =  await sessionStorage.getItem('USER')
            data = JSON.parse(data)
            setUSER( data)
            return data;
      }
      const getTOKEN =  async () => {
            let data =  await sessionStorage.getItem('TOKEN')
            data = JSON.parse(data)
            setTOKEN( data)
            return data;
      }

      
      const setUSERSession = async (data) => {   
            await  sessionStorage.setItem('USER', JSON.stringify(data));
      }
           
      const onChangeForm = (name, value) => {
            setForm({
                  ...form,
                  [name] : value
            })
      }
      const handlePackage = ()=>{
            if(form.name !== null && form.address !==null && form.email !==null && form.phone !==null){
                  let dataType = 'Activasi'
                  sessionStorage.setItem('DATATYPE', JSON.stringify(dataType))
                  sessionStorage.setItem('FORMACTIVASI', JSON.stringify(form))
                  history.push('/Package')
               
            }else{
                  alert('mohon lengkapi data')
            }     
      }

      if(loading){
            return (
                  <Spinner/>
            )
      }
   return(
      <Fragment>
         <Header/>
         <div className="container">
            <div className="post-title">
                  <h3 style={{color: 'black'}}>
                        <strong>
                        <a>Activasi Member</a>
                        </strong>
                  </h3>
            </div>               
            <div className="col-md-12">
                  <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                              <div className="col-md-12">
                                    <div className="mb-3">
                                          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" defaultValue={USER.email} onChange={(value) => onChangeForm('email', value.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                          <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
                                          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Your name" defaultValue={USER.name} onChange={(value) => onChangeForm('name', value.target.value)} />
                                    </div> 
                                    <div className="mb-3">
                                          <label htmlFor="exampleFormControlInput5" className="form-label">Phone number</label>
                                          <input type="number" className="form-control" id="exampleFormControlInput5" placeholder="082xxxxx" defaultValue={USER.phone} onChange={(value) => onChangeForm('phone', value.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                          <label htmlFor="exampleFormControlTextarea6" className="form-label">Address</label>
                                          <textarea className="form-control" id="exampleFormControlTextarea6" rows="3" defaultValue={USER.address} onChange={(value) => onChangeForm('address', value.target.value)}  ></textarea>
                                    </div>
                                    <div className="login">
                                          <div className="mb-3">
                                          <button   className="button1" type="submit" onClick={handlePackage}>Selanjutnya</button>
                                          </div>     
                                    </div>
                                    {/* <button onClick={()=>console.log('data type',form)}>CONSOLE</button> */}
                              </div>
                        </div>    
                  </div>      
            </div>  
      </div>   
         <Footer/>
      </Fragment>
   )
}
export default Activasi
