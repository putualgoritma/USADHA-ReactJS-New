import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Footer, Header, Spinner } from '../../component'
import { Copy, ImageDetail1, Share } from '../../assets'
import API from '../../services';
import { Source } from '../../services/Config';
import axios from 'axios';
import { Rupiah } from '../../helper/Rupiah';

function Profile() {

      const [USER, setUSER] = useState(null);
      const [TOKEN, setTOKEN] = useState(null);
      const history = useHistory();
      const [loading, setLoading] = useState(true);
      const [confirmPassword, setConfirmPassword] = useState(null)
      const [user,setUser] = useState([])
      const [datatoken, setDataToken]=useState(null);
      const [point, setPoint] = useState(0)
      const [pointUpgrade, setPointUpgrade] = useState(0)
      const [pointSaving, setPointSaving] = useState(0)
      const [pointFee, setPointFee] = useState(0)
      // const [profile, setProfile] = useState(null)
      const [form, setForm] = useState({
            id :null,
            name : null,
            password : null,
            phone :null,
            email:null,
            address:null
      })
      

      const getPoint = () => {
            axios.get('https://admin.belogherbal.com/api/close/balance/187' + `${user.id}`, {
              headers: {
                Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYmNjODQ3ZDNkOWQ1ZDBkYzBhYWNiOWU2OTg5OGM2NDdjMWUxZDRlZTIzOTQxODQ4ZjNjNTJiODA5YjczN2ZmNzA1NTU4YzliMDk2YTZlMTQiLCJpYXQiOjE2NDEyODAwODcsIm5iZiI6MTY0MTI4MDA4NywiZXhwIjoxNjcyODE2MDg3LCJzdWIiOiIxODciLCJzY29wZXMiOltdfQ.dfvQj9datI3K4-euvMMPVSZqBo_Q1upG8TYy6vot78IA2yb715e4k1VvhkdshPJw_Yf2PzllJrfAvutXyX6OPBBr9BrvgNZL_pZxADay8LsTrrCsyNydpM77fJv9Tyj31ObpLinW9h10Ql8CRD34KJSBScf8uPiwdalVYrQ5-UYnq_6d7ROBXqUt1tY0W_aPAR2PxyL_kN-kR3G-cEzzqTBWrrUTiEARywxpCuGcLa1yG7xEEH8gVG55ePSSz9anV2z_3l2hYqKbpxlC4fdggNZrWgB98VZdj_JJhu1llV_LcEtDEtuVGg-zz8HrPIoJz-aBje5WHNfg7L6R7Qm1So8tADL_60wJMzN4OTlC5pz-IVjhA08GPzixLIA_sJwOoMjOwAQuwzCoqca-BqsoFm9v8IQglP6G9Osq9Rk5WAbSYzjUVe7yTg0P8LUMr-DbjtMfqbSMTtRAdEwVMjKAaaluFFLI63DbzsQdq4604OlRvLjh0vaWAOh5aZg4E9tuha4wiMn7KbBZt9z8gBCxTtgoh72Oozcjqdy1Onq9qsBT5mkclbzibuc-cizj-M35nDOxTh0EBtMrGAKHskh0DPxXi1A01KbReNRRUSG2h3RK3iMXRwRRyu6zgl-jGWABV-anfNnnek8r8I0kElnMMT8RlLNlxxFujylyXSgHQqQ'}`,
                'Accept': 'application/json'
              }
            })
              .then((result) => {
               
                setPoint(parseInt(result.data.data[0].balance_points))
                setPointUpgrade(parseInt(result.data.data[0].balance_upgrade_points))
                setPointSaving(parseInt(result.data.data[0].balance_saving_points))
                setPointFee(parseInt(result.data.data[0].fee_points))
              }).catch((e) => {
                console.log(e);
                console.log('error Api point')
              })
          }

      useEffect( () => {
            let isAmounted = false
            if(!isAmounted) { 
                  Promise.all([getUSER(), getTOKEN(),getPoint()]).then((res) => {
                        let userData = res[0];
                        let tokenData = res[1];
                        setUser(res[0]);
                        setDataToken(res[1]);
                        // console.log('data res',res);
                        
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

      // const handlePackage = ()=>{
      //       if(form.name !== null && form.address !==null && form.email !==null && form.phone !==null){
      //             let dataType = 'Upgrade'
      //             sessionStorage.setItem('DATATYPE', JSON.stringify(dataType))
      //             sessionStorage.setItem('FORMUPGRADE', JSON.stringify(form))
      //             history.push('/Package')
               
      //       }else{
      //             alert('mohon lengkapi data')
      //       }     
      // }

      const handleProfile = () => {
            if(form.password !== null) {
                  if(form.password === confirmPassword){
                        
                        if(form.id !== null && form.name !=='' && form.email !=='' && form.address !=='' && form.phone !==''){
                              setLoading(true)
                              API.updateProfile(form, TOKEN).then((result) => {
                                    setUSERSession(result.data)
                                    // window.location.reload();
                                    history.push(`/landing/profile sukses update/profile`)
                              }).catch((e) => {
                                    alert('profile tidak bisa di update')
                                    setLoading(false)
                              })
                        }else{
                              alert('mohon lengkapi data anda')
                        }
                  }
                  else{
                        alert('password tidak sama')
                  }
            }else{
                  alert('mohon isi password')
            }
      }

      if(loading){
            return (
                  <Spinner/>
            )
      }
      return (
          <Fragment>
                 <Header/>
                 <div id="sns_content" className="wrap layout-m">
                  <div className="container">            
                        <div className = 'row '>
                              <div className='col-12 col-md-4' >
                                    <div className='box-profile text-center'>
                                          <h3 className='text-left text-home-title-page'>Edit Profile</h3>
                                          <img src={USER.img !==null ?`${process.env.REACT_APP_BASE_URL}${USER.img.replace('public/', '')}` : ImageDetail1}   alt='foto-agent' /><br/>
                                          {/* <button className='btn-pilih-gambar' style={{color:'white'}}  >Pilih Gambar</button> */}

                                          <div className="login">
                                                <div className="mb-3">
                                                      <button  className="button1" type="button">Pilih Gambar</button>
                                                </div>     
                                          </div>
                                          {/* <input id='input-image' type='file' onChange={(value) => setProfile(value.target.files[0])}></input> */}
                                          <h4 className='text-left mb-2'>Link Riferal</h4>
                                          <a href={USER.ref_link}>{USER.ref_link}</a>
                                          <p></p>
                                          <div style={{display:'flex', alignItems:'center ', justifyContent:'center'}}>
                                                <span style={{flex:1}}>
                                                      <img src={Copy} alt='gambar' style={{width:20, height:20}} />
                                                      <p>Copy</p>
                                                      <p>Point Belanja :{Rupiah(point)}</p>
                                                      <p>Point Upgrade :{Rupiah(pointUpgrade)}</p>
                                                </span>
                                                <span style={{flex:1}}>
                                                      <img src={Share} alt='gambar' style={{width:20, height:20}} />
                                                      <p>Share</p>
                                                      <p>Point Tabungan :{Rupiah(pointSaving)}</p>
                                                      <p>Point Komisi :{Rupiah(pointFee)}</p>
                                                </span>
                                          </div>
                                         
                                    </div>
                              </div>
                              <div className='col-12 col-md-1 m-0 p-0 garis-batas'>
                              </div>
                              <div className='col-12 col-md-7 box-profile-saya'>
                                    <div>
                                          <h3 className='text-left text-home-title-page'>Profile Saya</h3>
                                          <div className="form-group row my-3">
                                                <label htmlFor="namaLengkap" className="col-sm-2 col-form-label">Nama</label>
                                                <div className="col-sm-10">
                                                      <input type="text" className="form-control" id="namaLengkap" placeholder="Nama Lengkap" defaultValue={USER.name} onChange={(value) => onChangeForm('name', value.target.value)}/>
                                                </div>
                                          </div>
                                          <div className="form-group row my-3">
                                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                                <div className="col-sm-10">
                                                      <input type="password" className="form-control" id="password" placeholder="*********"  onChange={(value) => onChangeForm('password', value.target.value)} />
                                                </div>
                                          </div>
                                          <div className="form-group row my-3">
                                                <label htmlFor="confirm-password" className="col-sm-2 col-form-label">Confirm</label>
                                                <div className="col-sm-10">
                                                      <input type="password" className="form-control" id="confirm-password" placeholder="**********" onChange={(value) => setConfirmPassword(value.target.value)}/>
                                                </div>
                                          </div>
                                          <div className="form-group row my-3">
                                                <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                                                <div className="col-sm-10">
                                                      <input type="email" className="form-control" id="Email" placeholder="Email" defaultValue={USER.email} onChange={(value) => onChangeForm('email', value.target.value)} />
                                                </div>
                                          </div>
                                          <div className="form-group row my-3">
                                                <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                                                <div className="col-sm-10">
                                                      <input type="number" className="form-control" id="phone" placeholder="082*****" defaultValue={USER.phone} onChange={(value) => onChangeForm('phone', value.target.value)} />
                                                </div>
                                          </div>
                                          <div className="form-group row my-3">
                                                <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                                                <div className="col-sm-10">
                                                <textarea className="form-control" id="alamat" rows="3" defaultValue={USER.address} onChange={(value) => onChangeForm('address', value.target.value)} ></textarea>
                                                </div>
                                          </div>
                                          <div className="form-group row my-3">
                                                <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                                                <div className="col-sm-10  d-flex align-items-center " >
                                                      <div className='type-member'>{USER.type}</div>
                                                </div>
                                          </div>
                                          <div className="form-group row my-3">
                                                <div className='col-sm-2'></div>
                                               
                                                <div className="login col-sm-10 text-center">
                                                      <div className="mb-3">
                                                            {/* <button  onClick={() => {handlePackage}} className="button1" type="button">Upgrade</button> */}
                                                            <button  onClick={() => {if(window.confirm('Update Profile  ?')){handleProfile()};}}  className="button1" type="button">Update Biodata</button>
                                                      </div>   
                                                      {/* <div className="mb-3">
                                                            <button  onClick={() => {console.log(user.id)}}  className="button1" type="button">Update Biodata</button>
                                                      </div>      */}
                                                </div>

                                          </div>
                                    </div>
                              </div>      
                        </div>
                  </div>
            </div>                      
                  <Footer/>
          </Fragment>
      )
}

export default Profile
