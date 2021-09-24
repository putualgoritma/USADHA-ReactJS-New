import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { profile } from '../../assets'
import { Footer, Header, Spinner } from '../../component'
import API from '../../services'
import { Source } from '../../services/Config'

function Agen() {
      const [loading, setLoading] = useState(true)
      const [agen, setAgen] = useState(null)
      const history = useHistory()
      const [select, setSelect] = useState(null)

      useEffect(() => {
            let isAmounted = false
            if(!isAmounted) {
                  Promise.all([API.agents()])
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
                                <div className='col-6 col-md-4' key={item.id} onClick={() => setSelect(item.id)}>
                                    <div style={{backgroundColor : (select !== null && select === item.id ?  '#F3C242' : ''), paddingTop:15, paddingBottom:15, borderRadius:10}}>
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
                    <div className="login">
                        <div className="mb-3">
                            <button onClick={select ? () => history.push("/checkout/" + select) : () => alert('pilih agen terlebih dahulu')} className="button1" type="button">Pilih Agen</button>
                        </div>     
                    </div>    
                </div>
            </div>
                       
                  <Footer/>
        </Fragment>
      )
}

export default Agen
