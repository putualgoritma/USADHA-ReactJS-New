import React, { Fragment, useEffect, useState } from 'react'
import { ImageDefault,profile } from '../../assets'
import { Footer, Header, Spinner } from '../../component'
import { Rupiah,} from '../../helper/Rupiah'
import {Numformat} from '../../helper/Numformat'
import API from '../../services'
import { Source } from '../../services/Config'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Testing=()=>{
    // const [activations, setActivations] = useState([]);
    // const [loading, setLoading] = useState(true)
    // const [bvmin, setBvmin] = useState(0);
    // const [checkeddef, setCheckeddef] = useState(0);
    // const [dataType, setDataType] = useState('Jaringan');
    // const [status, setStatus] = useState('user');
    // const [activationType, setActivationType] = useState(1);

    // const dataForm = JSON.parse(sessionStorage.getItem('FORMREGIS'));
    // sessionStorage.setItem('DATATYPE', JSON.stringify(dataType));
  
    // useEffect( () => {
    //   // setLoading(true);
    //     let isAmounted = false
    //     if(!isAmounted) {
    //           axios.get('https://admin.belogherbal.com/api/close/activation-type',{
    //                 headers: {
    //                       cancelToken :'',
    //                       Authorization: (`Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNDJkZjg3NDZlZWI1M2M1NDlkNTFiYmNjN2IwM2JkOTkyZWMxMjYyNzQwZmQ4YTlkOWIyNTk2MGVlZGZlNzE0NzU5YjA5MDhmNjMyNjU4ZDMiLCJpYXQiOjE2NDI0ODI5MTcsIm5iZiI6MTY0MjQ4MjkxNywiZXhwIjoxNjc0MDE4OTE3LCJzdWIiOiIxODciLCJzY29wZXMiOltdfQ.kBbMD50vdaJ2Zk2uX7NF5cKIbLej9bj2OUxk1z70h2DjKzTNUcveLBSSKVi8IYqvyEikFUAJTE1r9kOzGaNnQcRyE6Nh-lwQs8FKSIkL0E4eDk199Z9SesGgWx3tVhrwo4wu1mPGzmJVq7uhUvtJZeP9nc2gm64lvBPCOfono-bgPg8Mbk4ZSUh0Cn1Fe7h0NEPQukZyonpMyA6QdE19LJcn5sEgIgilqiThdhi-Zdb46jven9zBVRcivJ4AqxABUjuZw_iz7z0jl-MhHr3EzZMp2UQO7Qve0T2OTL6zn1-XhlLl6sVX91HpGlVaHdKasA6nRXXggQA3iypw-cX-CHJT6ULB4HII4CiZIPP-CxXGKk6ffyk4PbQTxoP6uSJa3Ns2LIPr92QKP6SWJvwOa6WCC6-0qCWiDwivUBO10LRSO1twig7VrNSGM2R19zvRO5xK1HzvXpbFeics1vbQV7MhJTK7cpsw_7scyo_WUbxt0tIs93TIsTRbdKJc-ga8JMrqeHxvM7wgsRJxW6PGoAujQB3rFMQX7qu6o70tkes4RKiP9e1Du_HVC-76wEHlI_Ib7vQEVsydW6T5dei_mS8sze50ZsYPJDqh_shaa6kWJ-t8FIUj3-AU1AjOSs7wTniASyyP7VsYYxFffIish5RIrZg5b2oGxOz4r5-_wIY'}`),
    //                       'Accept' : 'application/json' 
    //                 }
    //           }).then((res) => {
    //                   setActivations(res.data.data)
    //                   // setLoading(false)
    //                 let dataActivationsArr = []
    //                 let bvPrev = 0
    //                 let firstSelected = 0
    //                 if (dataType == 'Upgrade') {
    //                       console.log('Upgrade',dataType)
    //                       let dataActivations = res.data.data
    //                       dataActivations.map((item, index) => {
    //                             setName(item.name)
    //                         if (item.id == dataForm.activations.id) {
    //                           bvPrev = item.bv_min
    //                         }
    //                         if (item.id > dataForm.activations.id) {
    //                           dataActivationsArr[index] = { id: item.id, name: item.name, type: item.type, bv_min: item.bv_min - bvPrev, bv_max: item.bv_max - bvPrev }
    //                           if (firstSelected == 0 && checkeddef==0) {
    //                             setStatus(item.name)
    //                             setBvmin((item.bv_min - bvPrev)*1000)
    //                             setActivationType(item.id)
    //                             setCheckeddef(1)
    //                             sessionStorage.setItem('ACTIVATIONTYPE', JSON.stringify(activationType));
    //                           }
    //                           firstSelected = firstSelected + 1
    //                         }
    //                       })
    //                     } else {
    //                       console.log('Not Upgrade',dataType)
    //                       setActivations(res.data.data)
    //                       sessionStorage.setItem('ACTIVATIONTYPE', JSON.stringify(activationType));

    //                 }
    //                  setLoading(false)
    //             //  console.log('data res activation1',res.data.data)
    //           }).catch((e) => {
    //                 console.log(e);
                   
    //           })   
        
              
    //     } return () => {
    //           Source.cancel('cancel api')
    //           isAmounted = true;
    //             setLoading(false)
    //     }
    //   }, [])

    // const checkBvmin = (a, b, c) => {
    //     setBvmin(a)
    //     setActivationType(b)
    //   };

   
    // if(loading){
    //     return (
    //           <Spinner/>
    //     )
    // }
    return(

    <Fragment>
        <Header/>
        {/* <div className="container"> */}
            {/* <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <span style={{fontWeight:500, fontSize:15}}>Pilih Tipe</span>
                        <p></p>
                    </div>
            </div>
            <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                    {activations.map((item) => {
                        let nama_paket = item.name
                        nama_paket = nama_paket.charAt(0).toUpperCase() + nama_paket.slice(1);
                        let bv_min = item.bv_min * 1000
                        return(
                        <div> 
                                <input type="radio" value={item.name} 
                                style={{width:17, height:17}}
                                checked={status == item.name}
                                onClick={() => checkBvmin(bv_min, item.id, setStatus(item.name))}
                                /> 
                                <label className="form-check-label" htmlFor="flexCheckChecked" style={{fontWeight:500, fontSize:14, paddingLeft:20, paddingBottom:8}}>
                                    Paket {nama_paket}({item.id != 4 ? item.bv_min +' - '+ item.bv_max : 'min '+Numformat(item.bv_min)} bv)
                                </label>
                        </div>
                        )
                    })}
                    </div>
            </div> */}
            {/* <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <span style={{fontWeight:500, fontSize:15}}>Keranjang Paket</span>
                </div>
            </div> */}
            {/* <br></br> */}
            <div style={{marginTop:350}}>

            </div>
                <div className="login">
             
                        <div className="mb-3">
                            {/* <button className="button1" type="button" onClick={() => history.push("/Products")}>Pilih Paket</button> */}
                            <Link to={"/products"}> <button   className="button1" type="submit">Pilih Paket</button></Link>
                      
                        </div> 
                  
                </div>
        {/* </div> */}
    </Fragment>
    )
}

export default Testing;