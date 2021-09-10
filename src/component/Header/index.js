import React,{Fragment} from 'react'
import { Logo,Product8,Carousel1 } from '../../assets'

const Header = (props)=>{
    return (
      <Fragment>
   
<div id="bd"className=" cms-index-index4 header-style4 prd-detail cms-simen-home-page-v2 default cmspage">
    <div id="sns_wrapper">
        {/* HEADER */}
        <div id="sns_header" className="wrap">
            {/* Header Top */}
            <div className="sns_header_top">
                <div className="container">
                    <div className="sns_module">
                        <div className="header-setting">
                            <div className="module-setting"></div>
                        </div>
                        <div className="header-account">
                            <div className="myaccount">
                                <div className="tongle">
                                    <i className="fa fa-user"></i>
                                    <span>My account</span>
                                    <i className="fa fa-angle-down"/>
                                </div>
                                <div className="customer-ct content">
                                    <ul className="links">
                                        <li className="first">
                                            <a className="top-link-myaccount" title="My Account" href="#">My Account</a>
                                        </li>
                                        <li>
                                            <a className="top-link-checkout" title="Checkout" href="#">Checkout</a>
                                        </li>
                                        <li className=" last">
                                            <a className="top-link-login" title="Log In" href='./Login'>Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Logo */}
            <div id="sns_header_logo">
                <div className="container">
                    <div className="container_in">
                        <div className="row">
                            <h1 id="logo" className="responsv col-md-3">
                                <a href="index4.html" title="Magento Commerce">
                                    <img alt="alt" src={Logo}/>
                                </a>
                            </h1>
                            <div className="col-md-9 policy">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-phone-12">
                                        <div className="policy_custom">
                                            <div className="policy-icon">
                                                <em className="fa fa-truck"></em>
                                            </div>
                                            <p className="policy-titile">100% Produk alami</p>
                                            <p className="policy-ct">Produk yang kami tawarkan 100% berasal dari alam</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-phone-12">
                                        <div className="policy_custom">
                                            <div className="policy-icon">
                                                <em className="fa fa-cloud-upload"></em>
                                            </div>
                                            <p className="policy-titile">Pengiriman cepat</p>
                                            <p className="policy-ct">Dengan menggunakan sistem agen, pengiriman dapat cepat</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-phone-12">
                                        <div className="policy_custom">
                                            <div className="policy-icon">
                                                <em className="fa fa-gift"></em>
                                            </div>
                                            <p className="policy-titile">Konsultasi dokter</p>
                                            <p className="policy-ct">Anda bisa konsultasi dengan dokter secara gratis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu */}
            <div id="sns_menu">
                <div className="container">
                    <div className="sns_mainmenu">
                        <div id="sns_mainnav">
                            <div id="sns_custommenu" className="visible-md visible-lg">
                                <ul className="mainnav">
                                    <li className="level0 custom-item active">
                                        <a className="menu-title-lv0 pd-menu116" href='/' target="_self">
                                            <span className="title">Home</span>
                                        </a>
                                    </li>
                                    <li className="level0 custom-item">
                                        <a className=" menu-title-lv0" href='/About'>
                                            <span className="title">Tentang</span>
                                        </a>
                                    </li>
                                    <li className="level0 custom-item">
                                        <a className=" menu-title-lv0" href='/Product'>
                                            <span className="title">Produk</span>
                                        </a>
                                    </li>
                                    <li className="level0 custom-item">
                                        <a className="menu-title-lv0" href='/Testimoni'>
                                            <span className="title">Testimoni</span>
                                        </a>
                                    </li>
                                    <li className="level0 custom-item">
                                        <a className="menu-title-lv0" href='/Contact'>
                                            <span className="title">Contact</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div id="sns_mommenu" className="menu-offcanvas hidden-md hidden-lg">
                                <span
                                    className="btn2 btn-navbar leftsidebar"
                                    style={{display: 'inline-block'}
                                    }>
                                    <i className="fa fa-align-left"/>
                                    <span className="overlay"/>
                                </span>
                                <span className="btn2 btn-navbar offcanvas">
                                    <i className="fa fa-align-justify"/>
                                    <span className="overlay"/>
                                </span>
                                <span className="btn2 btn-navbar rightsidebar">
                                    <i className="fa fa-align-right"/>
                                    <span className="overlay"/>
                                </span>
                                <div id="menu_offcanvas" className="offcanvas">
                                    <ul className="mainnav">
                                        <li className="level0 nav-5 first active">
                                            <div className="accr_header">
                                                <a className=" menu-title-lv0" href="index.html">
                                                    <span>
                                                        <strong>Home</strong>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="level0 nav-5 first active">
                                            <div className="accr_header">
                                                <a className=" menu-title-lv0" href='/About'>
                                                    <span>
                                                        <strong>Tentang</strong>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="level0 nav-5 first active">
                                            <div className="accr_header">
                                                <a className=" menu-title-lv0" href='/Product'>
                                                    <span>
                                                        <strong>Produk</strong>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="level0 nav-5 first active">
                                            <div className="accr_header">
                                                <a className=" menu-title-lv0" href='/Testimoni'>
                                                    <span>
                                                        <strong>Testimoni</strong>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="level0 nav-5 first active">
                                            <div className="accr_header">
                                                <a className=" menu-title-lv0" href='/Contact'>
                                                    <span>
                                                        <strong>Contact</strong>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sns_menu_right">
                            <div className="block_topsearch">
                                <div className="top-cart">
                                    <div className="mycart mini-cart">
                                        <div className="block-minicart">
                                            <div className="tongle">
                                                <i className="fa fa-shopping-cart"/>
                                                <div className="summary">
                                                    <span className="amount">
                                                        <a href="#">
                                                            <span>3</span>
                                                            ( items )
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="block-content content">
                                                <div className="block-inner">
                                                    <ol id="cart-sidebar" className="mini-products-list">
                                                        <li className="item odd">
                                                            <a className="product-image" title="Modular Modern" href="detail.html">
                                                                <img alt="alt" src={Product8}/>
                                                            </a>
                                                            <div className="product-details">
                                                                <a
                                                                    className="btn-remove"
                                                                    onclick="return confirm('Are you sure you would like to remove this item from the shopping cart?');"
                                                                    title="Remove This Item"
                                                                    href="#">Remove This Item</a>
                                                                <a className="btn-edit" title="Edit item" href="#">Edit item</a>
                                                                <p className="product-name">
                                                                    <a href="detail.html">Modular Modern</a>
                                                                </p>
                                                                <span className="price">$ 540.00</span>
                                                            </div>
                                                        </li>
                                                        <li className="item odd">
                                                            <a className="product-image" title="Modular Modern" href="detail.html">
                                                                <img alt="alt" src={Product8}/>
                                                            </a>
                                                            <div className="product-details">
                                                                <a
                                                                    className="btn-remove"
                                                                    onclick="return confirm('Are you sure you would like to remove this item from the shopping cart?');"
                                                                    title="Remove This Item"
                                                                    href="#">Remove This Item</a>
                                                                <a className="btn-edit" title="Edit item" href="#">Edit item</a>
                                                                <p className="product-name">
                                                                    <a href="detail.html">Modular Modern</a>
                                                                </p>
                                                                <span className="price">$ 540.00</span>
                                                            </div>
                                                        </li>
                                                        <li className="item last even">
                                                            <a className="product-image" title="Modular Modern" href="detail.html">
                                                                <img alt="alt" src={Product8}/>
                                                            </a>
                                                            <div className="product-details">
                                                                <a
                                                                    className="btn-remove"
                                                                    onclick="return confirm('Are you sure you would like to remove this item from the shopping cart?');"
                                                                    title="Remove This Item"
                                                                    href="#">Remove This Item</a>
                                                                <a className="btn-edit" title="Edit item" href="detail.html">Edit item</a>
                                                                <p className="product-name">
                                                                    <a href="#">Modular Modern</a>
                                                                </p>
                                                                <span className="price">$ 540.00</span>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                    <p className="cart-subtotal">
                                                        <span className="label">Total:</span>
                                                        <span className="price">$ 540.00</span>
                                                    </p>
                                                    <div className="actions">
                                                        <a className="button">
                                                            <span>
                                                                <span>Check out</span>
                                                            </span>
                                                        </a>
                                                        <a className="button gfont go-to-cart" href="shoppingcart.html">Go to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.carousel}
        </div>
    </div>
</div>
      </Fragment>
    );
}
export default Header 