import React, { Fragment, useEffect, useState } from 'react'
import { Footer, Header, Spinner } from '../../component';
import { ActiveUser,InActiveUser,AvatarTree,Expand,ExpandTop} from '../../assets';
import API from '../../services';
import { Source } from '../../services/Config';
import { useHistory } from 'react-router'

const ExpandToop = (props)=>{
    return(
        <div className='row'>
            <div className='col-md-8 col-xs-8' style={{paddingRight:1}}>
                <div className='col-md-6 col-md-offset-6'style={{padding:0}}>
                    <div  onClick={props.onClick} style={{backgroundColor:'#FFFFFF',height : 35, width:35, borderWidth:2, borderStyle:'solid', borderColor:'#ffc400',cursor:'pointer'}} className='center-block'>
                        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',height : 31, width:31}}>
                            <img src={ExpandTop} style={{width:25}} className="img-responsive"/>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#696969',height : 70, width:1}} className='center-block'></div>
                </div>
            </div>
        </div>
    )
}

const ExpandRight = (props) =>{
    return(
        <div className='col-md-4 col-xs-4'>
            <div className='row' style={{height:'auto',display:'flex', alignItems:'center'}}>
                <div className='col-md-6 col-xs-6' style={{padding:0}}>
                    <div style={{backgroundColor:'#696969',height : 1, width:'100%'}}></div>
                </div>
                <div className='col-md-6 col-xs-6' style={{padding:0,cursor:'pointer'}} onClick={props.onClick}>
                    <div style={{display:'flex', alignItems:'center',backgroundColor:'#FFFFFF',height : 35, width:35, borderWidth:2, borderStyle:'solid', borderColor:'#ffc400'}}>
                        <img src={Expand} style={{width:25}} className="center-block img-responsive"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BoxDataMid = (props)=>{
    const user = props.user
    var typeColor = {
        backgroundColor : '#ffffff',
        borderColor : '#ffffff'
    }
    if(user.activations){
        if(user.activations.name == 'user'){
            typeColor = {
                backgroundColor : '#1AE383',
                borderColor : '#13CE75'   
            }
        }else if(user.activations.name == 'gold'){
            typeColor = {
                backgroundColor : '#FFDC26',
                borderColor : '#EFBD3C'   
            }
        }else if(user.activations.name == 'silver'){
            typeColor = {
                backgroundColor : '#E5E5E5',
                borderColor : '#DDDCDC'   
            }
        }else if(user.activations.name == 'platinum'){
            typeColor = {
                backgroundColor : '#FF0000',
                borderColor : '#E30303'   
            }
        }   
    }
    return(
        <Fragment>
            <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1'>
                        {props.lineVerticalUp}
                            <div className='row' style={{height:'auto',display:'flex', alignItems:'center'}}>
                                <div className='col-md-8 col-xs-8' style={{padding:0}}>
                                    <div className='col-md-6 col-md-offset-6' style={{backgroundColor:'#ffffff', borderStyle:'solid', borderWidth:2, borderColor:'#e34444'}}>
                                        <div style={{padding:8}}>
                                            <img src={AvatarTree} style={{width:60}} className="center-block"/>
                                        </div>
                                        <div style={{paddingBottom:8}}>
                                            <div style={{borderColor:typeColor.borderColor,backgroundColor:typeColor.backgroundColor,borderWidth:2, borderStyle:'solid', width:17, height:17, borderRadius:'100%'}} className="center-block"></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4 col-xs-4'>
                                                Kode
                                            </div>
                                            <div className='col-md-1 col-xs-1' style={{padding:0}}>
                                                :
                                            </div>
                                            <div className='col-md-6 col-xs-6' style={{padding:0}}>
                                               {user.code}
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4 col-xs-4'>
                                                Nama
                                            </div>
                                            <div className='col-md-1 col-xs-1' style={{padding:0}}>
                                                :
                                            </div>
                                            <div className='col-md-6 col-xs-6' style={{padding:0}}>
                                                {user.name}
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4 col-xs-4'>
                                                Tipe
                                            </div>
                                            <div className='col-md-1 col-xs-1' style={{padding:0}}>
                                                :
                                            </div>
                                            <div className='col-md-6 col-xs-6' style={{padding:0}}>
                                                {user.activations != null ? user.activations.name : null}
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4 col-xs-4'>
                                                Refferal
                                            </div>
                                            <div className='col-md-1 col-xs-1' style={{padding:0}}>
                                                :
                                            </div>
                                            <div className='col-md-6 col-xs-6' style={{padding:0}}>
                                                {user.refferal != null ? user.refferal.code : null} - {user.refferal != null ? user.refferal.name : null}
                                            </div>
                                        </div>
                                        <hr style={{marginTop:8,marginBottom:8}}/>
                                        <div className='row' style={{paddingBottom:10}}>
                                            <div className='col-md-4 col-xs-4'>
                                                Activasi
                                            </div>
                                            <div className='col-md-1 col-xs-1' style={{padding:0}}>
                                                :
                                            </div>
                                            <div className='col-md-6 col-xs-6' style={{padding:0}}>
                                                {user.activation_at}
                                                {/* {new Date(user.activation_at).getFullYear()+'-' +(new Date(user.activation_at).getMonth() + 1)+'-'+new Date(user.activation_at).getDate()} */}
                                            </div>
                                        </div>
                                    </div>                                  
                                </div>
                                {props.ExpandRight}
                            </div>
                            {!props.lineVertical &&
                            <div className='row'>
                                <div className='col-md-8 col-xs-8' style={{paddingRight:1}}>
                                    <div className='col-md-6 col-md-offset-6'style={{padding:0}}>
                                        <div style={{backgroundColor:'#696969',height : 70, width:1}} className='center-block'></div>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

const Tree =()=>{
    const [data, setData] = useState([])
    const token =  JSON.parse(sessionStorage.getItem('TOKEN'));
    const [userReducer,setUserReducer] = useState(JSON.parse(sessionStorage.getItem('USER')));
    const [firstUserReducer,setFirstUserReducer] = useState(JSON.parse(sessionStorage.getItem('USER')));
    const [loading, setLoading] = useState(true);
    const [lastUserReducer, setLastUserReducer] = useState([]);
    const [USER, setUSER] = useState(null)
    const [TOKEN, setTOKEN] = useState(null)
    const history = useHistory()
    const baseDataUser = (JSON.parse(sessionStorage.getItem('USER')));
    useEffect( () => {
        let isAmounted = false
        if(!isAmounted) { 
            Promise.all([getUSER(), getTOKEN()]).then((res) => {
                let userData = res[0];
                let tokenData = res[1];
                if(userData !== null && tokenData !==null){
                    getDownline()
                    console.log('user',userReducer)
                    console.log('baseuser',baseDataUser)
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

    const getDownline =(id = null)=>{
        setLoading(true)
        if(id ==null ){
            id = userReducer.id
        }
        Promise.all([API.downline(id, token)]) 
        .then((result) => { 
                console.log('data result',result[0].data)
                setData(result[0].data)
                setLoading(false)
        }).catch((e) => {
                console.log(e);
                setLoading(false)
         })
    }

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


    if(loading){
        return (
              <Spinner/>
        )
    }
    return(
        <Fragment>
            <Header/>
            <div id="sns_content" className="wrap layout-m">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 col-sm-5 col-xs-5 col-md-offset-1  col-sm-offset-1 col-xs-offset-1 '>
                            <div className='row'>
                                <div className='col-md-6 col-xs-6 col-sm-6'>
                                    <img src={ActiveUser} style={{width:50}} className="center-block"/>
                                    <p className='text-center'>Active User</p>
                                </div>
                                <div className='col-md-6 col-xs-6 col-sm-6 '>
                                    <img src={InActiveUser} style={{width:50}} className="center-block"/>
                                    <p className='text-center'>Inactive User</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 col-sm-5 col-xs-5'>
                            <div className='row' style={{marginBottom:5}}>
                                <div className='col-md-6 col-xs-6 col-sm-6'>
                                    <div className='row'>
                                        <div className='col-md-2 col-xs-2 col-sm-2'>
                                            <div style={{backgroundColor:'#1AE383', borderColor:'#13CE75',borderWidth:2, borderStyle:'solid', width:25, height:25, borderRadius:'100%'}}></div>
                                        </div>
                                        <div className='col-md-2 col-xs-2 col-sm-2' >
                                           <span style={{position:'absolute',top:5}}>User</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-xs-6 col-sm-6'>
                                <div className='row'>
                                        <div className='col-md-2 col-xs-2 col-sm-2'>
                                            <div style={{backgroundColor:'#E5E5E5', borderColor:'#DDDCDC',borderWidth:2, borderStyle:'solid', width:25, height:25, borderRadius:'100%'}}></div>
                                        </div>
                                        <div className='col-md-2 col-xs-2 col-sm-2' >
                                           <span style={{position:'absolute',top:5}}>Silver</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'  style={{marginBottom:5}}>
                                <div className='col-md-6 col-xs-6 col-sm-6'>
                                <div className='row'>
                                        <div className='col-md-2 col-xs-2 col-sm-2'>
                                            <div style={{backgroundColor:'#FFDC26', borderColor:'#EFBD3C',borderWidth:2, borderStyle:'solid',width:25, height:25, borderRadius:'100%'}}></div>
                                        </div>
                                        <div className='col-md-2 col-xs-2 col-sm-2' >
                                           <span style={{position:'absolute',top:5}}>Gold</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-xs-6 col-sm-6'>
                                <div className='row'>
                                        <div className='col-md-2 col-xs-2 col-sm-2'>
                                            <div style={{backgroundColor:'#FF0000', borderColor:'#E30303',borderWidth:2, borderStyle:'solid', width:25, height:25, borderRadius:'100%'}}></div>
                                        </div>
                                        <div className='col-md-2 col-xs-2 col-sm-2' >
                                           <span style={{position:'absolute',top:5}}>Platinum</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <BoxDataMid
                user = {userReducer}
                lineVertical ={data.length > 0 ? false :true}
                lineVerticalUp ={baseDataUser.id !=  userReducer.id ? <ExpandToop onClick={()=> {getDownline(userReducer.ref_id); setUserReducer(lastUserReducer.pop());}}/> :null}
                 />
                {data.map((item, index) => {
                    return(
                    <BoxDataMid 
                    user = {item} 
                    ExpandRight = {<ExpandRight onClick={()=>{getDownline(item.id); setUserReducer(item); setFirstUserReducer(userReducer); lastUserReducer.push(userReducer)}}/>}
                    lineVertical = {(data.length-1) <= index ? true :false}
                    />
                )
                })}
                   
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Tree