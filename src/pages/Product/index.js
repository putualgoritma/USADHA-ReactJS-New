import React,{useEffect,useState}  from "react";
import { Fragment } from "react";
import {Header,Footer,Spinner} from '../../component'
import { ImageDefault, Product1,Product2,Product3,Product4 } from "../../assets";
import API from '../../services'
import { useHistory } from 'react-router-dom';
import { Source } from '../../services/Config';
import { Rupiah } from '../../helper/Rupiah';
import { Button } from "rsuite";

const Product=()=>{
    const history = useHistory()
    const [index, setIndex] = useState(0);
    const [products, setProducts] = useState(null)
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const [loading, setLoading] = useState(true) 

    useEffect(() => {
          let isAmounted = false
          if(!isAmounted) { 
                Promise.all([API.products()])
                .then((result) => {
                      console.log(result);
                      setProducts(result[0])
                      setLoading(false)
                }).catch((e) => {
                      console.log(e);
                      setLoading(false)
                })
         }
          return () => {
                Source.cancel('home cancel axios')
                isAmounted = true;
                console.log('cancel home');
          }
    }, [])

    
    if(loading){
        return (
              <Spinner/>
        )
  }
    return(
    <Fragment>
        <Header/>
        {/* {products == null &&
            <Spinner/>
        }     
        {products != null && */}
        <div>
                <div id="sns_content" className="wrap layout-m">
                    <div className="container">
                        <div className="row">
                            <div id="sns_main" className="col-md-12 col-main">
                                <div id="sns_mainmidle">
                                    <h1 style={{textAlign: 'center', marginBottom: 30}}>
                                        <strong>Produk Minyak Belog </strong>
                                    </h1>
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="home">
                                            <div className="products-grid row style_grid">
                                      
                                            {
                                            products && products.map((item, index)=> {
                                                return (
                                                <div className="item col-lg-2d4 col-md-3 col-sm-4 col-xs-6 col-phone-12 ">
                                                    <div className="item-inner">
                                                        <div className="prd">
                                                            <div className="item-img clearfix">
                                                                <a href ={'/Detail/'+ item.id}>
                                                                    <div
                                                                        className="product-image have-additional"
                                                                        title="Modular Modern"
                                                                        key = {index}>
                                                                        <span className="img-main">
                                                                            <img src= {(item.img == null ? ImageDefault :( process.env.REACT_APP_BASE_URL  + String(item.img).replace('public/', '')))} alt="alt"/>
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="item-info">
                                                                <div className="info-inner">
                                                                    <div className="item-title">
                                                                        <a title="Modular Modern" href='/Detail' >
                                                                            {item.name.length > 25 ? item.name.substr(0,22)+ "...":item.name}
                                                                        </a>
                                                                    </div>
                                                                    <div className="item-price">
                                                                        <div className="price-box">
                                                                            <span className="regular-price">
                                                                                <span className="price">
                                                                                    <span className="price1">{Rupiah(parseInt(item.price))}</span>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="action-bot">
                                                                <div className="wrap-addtocart">
                                                                    <a  href={'/Detail/' + item.id} className="btn-cart" title="Add to Cart">
                                                                        <i className="fa fa-shopping-cart"/>
                                                                        <span>Add to Cart</span>
                                                                    </a>
                                                                </div>
                                                                <div className="actions">
                                                                    <ul className="add-to-links"></ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                                }) }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            {/* } */}
            <Footer/>                
        </Fragment>
    )
}
export default Product