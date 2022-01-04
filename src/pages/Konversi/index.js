import React, { Fragment, useEffect, useState } from 'react'
import {FaCreditCard, FaRegCreditCard} from "react-icons/fa";
import { useHistory } from 'react-router';
import { Footer, Header, Spinner } from '../../component';
import { Rupiah } from '../../helper/Rupiah';
import API from '../../services';
import { Source } from '../../services/Config';
import axios from 'axios';

function Konversi  () {
    
    const history = useHistory()
    const [USER, setUSER] = useState(null)
    const [accountCash, setAccountCash] = useState(null);
    const [loading, setLoading] = useState(true);
    const [point, setPoint] = useState(0);
    const [TOKEN, setTOKEN] = useState(null);
    const [points, setPoints] = useState([]);
    const [selectedBank, setSelectedBank] = useState(null);
    const [rekening, setRekening] = useState('')
    const [datatoken, setDATATOKEN]=useState(null);
    const dateRegister = () => {
          let todayTime = new Date();
          let month = todayTime.getMonth() + 1;
          let day = todayTime.getDate();
          let year = todayTime.getFullYear();
          return year + "-" + month + "-" + day;
    }
    const [form, setForm] = useState({
          customers_id : null,
          amount : 0,
    })
    let dataConvert = {
        register : dateRegister(),
        customers_id : form.customers_id,
        amount : form.amount,
        bank_name : selectedBank,
        bank_acc_no : rekening,
        points : points,
  }

    const actionConvert = () => {
        setLoading(true)
        axios.post('https://admin.belogherbal.com/api/close/convert', dataConvert,
              {
                    headers: {
                          cancelToken :'',
                          Authorization: (datatoken ==null ? null : `Bearer ${datatoken}`),
                          'Accept' : 'application/json' 
                    }
              }
        ).then((res) => {
              console.log('data res convert',res)
            //   history.goBack(`landing/${res.data.message}/Konversi`)
                alert(res.data.message);
                // history.push(`/Konversi`);
            //   setModalVisible(false)
                window.location.reload();
              setLoading(false)
        }).catch((e) => {
            console.log(e);
            //   var mes = JSON.parse(e.request._response);
            //   alert(mes.message)
              setLoading(false)
        })
    //  })
    // }
        
  }

    useEffect( () => {
          let isAmounted = false
          if(!isAmounted) { 
                Promise.all([getUSER(), getTOKEN()]).then((res) => {
                      let userData = res[0];
                      let tokenData = res[1];
                      setDATATOKEN(res[1]);
                    //   console.log('data',userData.id)
                      if(userData !== null && tokenData !==null){
                            setForm({
                                  ...form,
                                  customers_id : userData.id
                            })
                            axios.get('https://admin.belogherbal.com/api/close/points?customer_id=' + `${userData.id}` + '&status_fld=convertion', {
                                headers: {
                                      cancelToken :'',
                                      Authorization: (tokenData ==null ? null : `Bearer ${tokenData}`),
                                      'Accept' : 'application/json'
                                }
                          })
                            // Promise.all([API.pointbalance(userData.id,tokenData)]) 
                            .then((result) => { 
                    
                                let arrayPoints = [];
                                let totalPoint = 0
                                result.data.map((item, index) => {
                                        let objPoint = {id:item.id,status:true,balance:item.balance,name:item.name}
                                        arrayPoints.push(objPoint)
                                        totalPoint += parseInt(item.balance)
                                    })
                                // console.log('arrayPoints', arrayPoints)
                                setPoints(arrayPoints)
                                setPoint(parseInt(totalPoint))
                                setLoading(false)
                            }).catch((e) => {
                                  console.log(e);
                                //   console.log('hohoho');
                                  setLoading(false)
                            })
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

    
    const getUSER =  () => {
          let data =  sessionStorage.getItem('USER')
          data = JSON.parse(data)
          setUSER( data)
          return data;
          
    }
    const getTOKEN =  () => {
          let data =  sessionStorage.getItem('TOKEN')
          data = JSON.parse(data)
          setTOKEN( data)
          return data;
          
    }


    const onChangeForm = (name, value) => {
          setForm({
                ...form,
                [name] : value
          })
    }

    const handleChecked = (index, value) => {
        let temp_state = [...points];
        let temp_element = { ...temp_state[index] };
        temp_element.status = value.target.checked;
        temp_state[index] = temp_element;
      setPoints(temp_state);
      };

    const checkAll = (a,b,c) => {
        let total=0;
        points.map((item, index) => {
            let statestatus = item.status
              if(a==item.id){
                    statestatus = false
              }
              if(statestatus==true || (a==item.id && b.target.checked==true)){
              total += parseInt(item.balance);
              }
            })
        setPoint(parseInt(total))
      };

 
      

    if(loading){
          return (
                <Spinner/>
          )
    }
    return(
        <Fragment>
            <Header/>
            <div id="sns_content" className="wrap layout-m">
                <div className="container">
                    <div className="post-title">
                        <h3 style={{color: 'black'}}>
                            <strong>
                                <a>Konversi ke Point Belanja</a>
                            </strong>
                        </h3>
                    </div>
                   <div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                {points && points.map((item, index)=> {
                             return (
                                <div className="form-check">
                                    <input  className="form-check-input" 
                                            type="checkbox" 
                                            defaultValue id="flexCheckChecked" 
                                            defaultChecked 
                                            onChange={(status) => checkAll(item.id,status,handleChecked(index,status))}
                                            style={{width:20, height:20}}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckChecked" style={{fontWeight:500, fontSize:14, paddingLeft:20, paddingBottom:10}}>
                                      {item.name}{Rupiah(parseInt(item.balance))}
                                    </label>
                                </div>
                                 )
                                })}
                            </div> 
                        </div>
                        <div className='row' style={{marginBottom:13}}>
                            <div className="col-md-8 col-md-offset-2">
                                <span style={{fontWeight:500, fontSize:14}}>Total Saldo Point :{Rupiah(point)}<b>
                                </b></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className ="col-md-2"></div>
                            <div className="col-md-8">
                            <span style={{fontWeight:500, fontSize:15}}>Pilih Nominal Convert</span>
                                <div className="row">
                                    <div className ="col-md-4">
                                        <div className='mb-3  nominal' onClick={()=>onChangeForm('amount', 200000)}>
                                            <span className='box-nominal ' style={{boxShadow : (form.amount === 200000 ? `0 0 5px rgb(230, 158, 26)` : ''), color : (form.amount === 200000? `rgb(230, 158, 26)` : '')}}> RP.200.000</span>
                                        </div>
                                    </div>
                                    <div className ="col-md-4">
                                        <div className='mb-3  nominal'>
                                            <span className='box-nominal'  style={{boxShadow : (form.amount === 300000 ? `0 0 5px rgb(230, 158, 26)` : ''), color : (form.amount === 300000? `rgb(230, 158, 26)` : '')}} onClick={()=>onChangeForm('amount', 300000)}> RP.300.000</span>
                                        </div>
                                    </div>
                                    <div className ="col-md-4">
                                        <div className='mb-3  nominal'>
                                            <span className='box-nominal' style={{boxShadow : (form.amount === 500000 ? `0 0 5px rgb(230, 158, 26)` : ''), color : (form.amount === 500000? `rgb(230, 158, 26)` : '')}} onClick={()=>onChangeForm('amount', 500000)}> RP.500.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className ="col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className ="col-md-2"></div>
                            <div className ="col-md-8">
                            <span style={{fontWeight:500, fontSize:15}}>Atau masukan nominal Convert disini</span>
                                <div className="mb-3">
                                    <input className="form-control" type="number" style={{padding:20}}  value={typeof form.amount !== 'object' ? form.amount :0}  onChange={(value) => {onChangeForm('amount', value.target.value);}}/>
                                </div>
                            </div>
                            <div className ="col-md-2"></div>
                        </div>
                    </div>
                    <div className="login">
                        <div className="mb-3">
                            <button onClick={() => {if(window.confirm('Convert Sekarang ?'))form.amount != 0   &&  form.amount <= point ? actionConvert() : form.amount > point ?  alert('point anda kurang!') : alert('data tidak lengkap!');}}  className="button1" type="button">Konvert</button>
                        </div>     
                    </div>
                </div>
            </div>
              
            <Footer/>
        </Fragment>
    )
}

export default Konversi