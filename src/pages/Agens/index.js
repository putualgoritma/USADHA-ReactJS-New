import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { profile } from '../../assets'
import { Footer, Header, Spinner } from '../../component'
import API from '../../services'
import { Source } from '../../services/Config'

function Agens(props) {
    const [loading, setLoading] = useState(true)
    const [agen, setAgen] = useState(null)
    const history = useHistory()
    const [select, setSelect] = useState(null)
    const width  = window.innerWidth;
    const [dataForm, setDataForm] = useState(JSON.parse(sessionStorage.getItem('FORMREGIS'))) ;
    const [dataFormActiv, setDataFormActiv] = useState(JSON.parse(sessionStorage.getItem('FORMACTIVASI'))) ;
    const [dataAgent,setDataAgent] = useState(null)
    const paket = JSON.parse(sessionStorage.getItem('PCART'));
    const activationType = JSON.parse(sessionStorage.getItem('ACTIVATIONTYPE'));
    const [TOKEN,setTOKEN] = useState(null);
    const dataType = JSON.parse(sessionStorage.getItem('DATATYPE'));
    const [idagents,setIdAgents]=useState(null);

    const getTOKEN =  async () => {
        let data =  await sessionStorage.getItem('TOKEN')
        data = JSON.parse(data)
        setTOKEN( data)
        return data;
  }

    const handleAgent = (a)=>{
        if (dataType =='Jaringan'){
        setDataForm(
            { 
                  ...dataForm,
                  agents_id : a
                
            })
        }else{
            setIdAgents(a) 
        }

        setDataAgent(a)
      
    }
    
    const logout = () => {
          Promise.all([sessionStorage.removeItem('USER'),  sessionStorage.removeItem('TOKEN')]).then((result) => {
                setTimeout(function () {
                      setLoading(false)
                      history.push('/login')
                    //   history.goBack('/login')
                  }, 2000); 
          }).catch((e) => {
                setLoading(false)
                alert('logout failed')
          })  
    }

    const handleActivasi =()=>{
        let dataActivasi = dataFormActiv;
        dataActivasi.cart = {item:paket};
        dataActivasi.activationtype = activationType;
        dataActivasi.agents_id = idagents;
        API.activasinew(dataActivasi, TOKEN).then((result) => {
            alert('activasi berhasil, silahkan login kembali')
            logout()
            // history.push(`/profile`)
            setLoading(false)
        }).catch((e) => {
            console.log(e.request);
            setLoading(false)
            let mes = JSON.parse(e.request.response)
            alert(mes.message)
            console.log('gagal')
            window.location.reload()
        })
        console.log('acti',dataActivasi)
    }

    const handleRegisterDownline = ()=>{
        setLoading(true)
        let dataJaringan = dataForm;
        dataJaringan.cart = {item:paket};
        dataJaringan.sponsor_id =  dataForm.ref_id;
        dataJaringan.activationtype = activationType;
        console.log('data dari jaringan',dataJaringan);
            API.registerdownlinenew(dataJaringan, TOKEN).then((result) => {
                history.push(`landing/Register Downline Berhasil/registerdownline`)
                setLoading(false)
            }).catch((e) => {
                console.log(e.request);
                setLoading(false)
                let mes = JSON.parse(e.request.response)
                alert(mes.message)
                console.log('gagal')
                window.location.reload()
            })

    }

    const handleUpgrade = ()=>{
        console.log('upgrade')
    }

    useEffect(() => {
        let isAmounted = false

        if(!isAmounted) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // alert('latitude : '+position.coords.latitude);
                // alert('longtitude : '+position.coords.longitude);
              });
                Promise.all([API.agents(),getTOKEN()])
                .then(result => {
                    // getUSER()
                    // getCART()
                    // setProduct(result[0].data)
                    setAgen(result[0].data)
                    setLoading(false)
                }).catch((e) => {
                    setLoading(false)
                })
        }
        return () => {
                Source.cancel('cancel axios')
                isAmounted = true
        }
    }, [])

    
    if(loading){
        return (
                <Spinner/>
        )
    }

      return (
        <Fragment>
            <Header/>
            
            <div id="sns_content" className="wrap layout-m">
                <div className="post-title">
                    <h3 style={{color: 'black'}}>
                        <strong>
                            <a>Pilih Agen</a>
                        </strong>
                    </h3>
                </div>
                <div className='container'>
                    <div className='row'>
                        {agen.map((item) => {
                                return (
                                <div className='col-6 col-md-4' key={item.id} onClick={() => handleAgent(item.id)}>
                                    <div style={{backgroundColor : (dataAgent !== null && dataAgent === item.id ?  '#F3C242' : ''), paddingTop:15, paddingBottom:15, borderRadius:10}}>
                                            <div className='text-center'>
                                                <img src={profile} style={{width:110, height:100}} alt='foto-agent'/>
                                            </div>
                                            <p>{item.name}</p>
                                            <p>{item.email}</p>
                                            <p>{item.phone}</p>
                                    </div>
                                </div>
                                )
                        })}
                    </div>
                    {dataType == 'Activasi' &&
                    <div className="login">
                        <div className="mb-3">
                            <button onClick={dataAgent != null ? handleActivasi : () => alert('pilih agen terlebih dahulu') } className="button1" type="button">Activasi</button>
                        </div>     
                    </div>  
                    }  
                    {dataType == 'Jaringan' &&
                    <div className="login">
                        <div className="mb-3">
                            <button onClick={dataAgent != null ? handleRegisterDownline : () => alert('pilih agen terlebih dahulu') } className="button1" type="button">Registrasi Downline</button>
                        </div>     
                    </div>  
                    }  
                    {dataType == 'Upgrade' &&
                    <div className="login">
                        <div className="mb-3">
                            <button onClick={dataAgent != null ? handleUpgrade : () => alert('pilih agen terlebih dahulu') } className="button1" type="button">Registrasi Downline</button>
                        </div>     
                    </div>  
                    }  

                    <button onClick={handleRegisterDownline}>CONSOLE</button>
                </div>
            </div>  
            <Footer/>
        </Fragment>
      )
}

export default Agens
