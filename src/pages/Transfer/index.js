import React, { Fragment, useEffect, useState } from 'react'
import { FaCreditCard, FaRegCreditCard } from 'react-icons/fa';
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { Footer, Header, Spinner } from '../../component';
import { Rupiah } from '../../helper/Rupiah';
import API from '../../services';
import { Source } from '../../services/Config';
import { SelectPicker, Button } from 'rsuite';

function Transfer  () {

    const history = useHistory();
    const [USER, setUSER] = useState(null)
    const [loading, setLoading] = useState(true);
    const [point, setPoint] = useState(0);
    const [TOKEN, setTOKEN] = useState(null)
    const [members, setMembers] = useState(null)

    const dateRegister = () => {
          let todayTime = new Date();
          let month = todayTime.getMonth() + 1;
          let day = todayTime.getDate();
          let year = todayTime.getFullYear();
          return year + "-" + month + "-" + day;
    }
    const [form, setForm] = useState({
          register : dateRegister(),
          amount : 0,
          from : null,
          to : null
    })

    useEffect( () => {
          let isAmounted = false
          if(!isAmounted) { 
                Promise.all([getUSER(), getTOKEN()]).then((res) => {
                      let userData = res[0];
                      let tokenData = res[1]

                      if(userData!== null && tokenData !==null){
                            Promise.all([API.members(tokenData), API.point(userData.id, tokenData)]) 
                            .then((result) => { 
                                  let memberData = [];
                                  result[0].data.map((item, index) => {
                                        memberData[memberData.length] ={
                                              label : `${item.name} (${item.code})`,
                                              value : item.id,
                                        }
                                  })
                                  setMembers(memberData)
                                  setForm({...form, from : userData.id})
                                  setPoint(parseInt(result[1].data[0].balance_points))
                                  setLoading(false)
                                  console.log('sekusis');
                            }).catch((e) => {
                                  console.log(e);
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
          // onChangeForm('customers_id', data.id)
          return data;
          
    }
    const getTOKEN =  () => {
          let data =  sessionStorage.getItem('TOKEN')
          data = JSON.parse(data)
          setTOKEN( data)
          return data;
          
    }


    const handleTransfer = () => {
          if(form.accounts_id !==null && form.amount > 0 && form.customers_id !==null && form.memo !== '' && form.register !== ''){
                if(point >= form.amount){
                      setLoading(true)
                      API.transfer(form, TOKEN).then((result) => {
                            // window.location.reload();
                            history.push(`landing/tansfer sukses/transfer`)
                      }).catch((e) => {
                            console.log(e.request);
                            alert('transfer gagal')
                      })
                }else{
                      alert('poin anda kurang')
                }
          }else{
                alert('mohon isi data dengan lengkap')
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
                            <a>Transfer</a>
                        </strong>
                    </h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className ="col-md-2"></div>
                        <div className ="col-md-8">
                            <div className="mb-3">
                                <SelectPicker data={members}  block onChange={(value) => setForm({...form, to : value})} className='mb-3 select-picker' style={{zIndex:2}} />
                            </div>
                        </div>
                        <div className ="col-md-2"></div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className ="col-md-2"></div>
                        <div className ="col-md-8">
                            <span style={{fontWeight:500, fontSize:15}}>Sumber Dana</span>
                            <div className='box-sumber-dana mb-3'>
                                <div className='d-flex flex-row'>
                                    <FaCreditCard className='icon-card mr-3'/>
                                    <div>
                                        <span className='font-weight-bold'>Minyak Belog Cash</span> <br/>
                                        <span className='font-smaller'>Balance {Rupiah(point)}</span>
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
                        <span style={{fontWeight:500, fontSize:13}}>Nominal Transfer</span>
                            <div className="mb-3">
                                <input className="form-control" type="number" style={{padding:20}} onChange={(value) =>  setForm({...form, amount : value.target.value})} minLength={0} />
                            </div>
                        </div>
                        <div className ="col-md-2"></div>
                    </div>
                </div>
                <div className="login">
                    <div className="mb-3">
                        <button onClick={() => {if(window.confirm('Transfer sekarang ?')){handleTransfer()};}}   className="button1" type="button">Transfer</button>
                    </div>     
                </div>
            </div>
            
              
            <Footer/>
        </Fragment>
    )
}

export default Transfer