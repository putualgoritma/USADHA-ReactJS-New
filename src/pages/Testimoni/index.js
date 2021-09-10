import React from "react";
import { Fragment } from "react";
import { Header,Footer } from "../../component";
import { ImageTesti1,ImageTesti2,ImageTesti3,ImageTesti4,ImageTesti5,ImageTesti6 } from "../../assets";

const Testimoni =()=>{
    return(
        <Fragment>
            <Header/>
                <div id="sns_content" className="wrap">
                    <div className="container">
                        <div className="row">
                            <div id="sns_main" className="col-md-12 col-main">
                                <div id="sns_mainmidle">
                                    <div className="blogs-page">
                                        <div className="postWrapper v1">
                                            <div className="post-title">
                                                <h1 style={{color: 'black'}}>
                                                    <strong>
                                                        <a href="testimoni.html">Testimoni pengguna Minyak Belog</a>
                                                    </strong>
                                                </h1>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={ImageTesti1}/>
                                                <h4>“Minyak Belog ini saya coba untuk dioleskan pada yang sakit, ternyata Minyak
                                                    Belog ini sangat manjur sekali memang”
                                                </h4>
                                                <p>I Gusti Putu Suartika, Kesemutan dan sakit pinggang</p>
                                                <br/>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={ImageTesti2}/>
                                                <h4>“Kaki saya yang hampir delapan bulan tidak bisa jalan akhirnya dengan Minyak
                                                    Belog, ini saya dapat berjalan seperti biasa”
                                                </h4>
                                                <p>Mastrini Erawati, Tidak dapat berjalan</p>
                                                <br/>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={ImageTesti3}/>
                                                <h4>“Kaki saya yang hampir delapan bulan tidak bisa jalan akhirnya dengan Minyak
                                                    Belog, ini saya dapat berjalan seperti biasa”
                                                </h4>
                                                <p>Mastrini Erawati, Tidak dapat berjalan</p>
                                                <br/>
                                            </div>
                                            <div className="col-md-12">
                                                <img src={ImageTesti4}/>
                                                <h4>“Minyak Belog ini saya coba untuk dioleskan pada yang sakit, ternyata Minyak
                                                    Belog ini sangat manjur sekali memang”
                                                </h4>
                                                <p>I Gusti Putu Suartika, Kesemutan dan sakit pinggang</p>
                                                <br/>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={ImageTesti5}/>
                                                <h4>“Minyak Belog ini saya coba untuk dioleskan pada yang sakit, ternyata Minyak
                                                    Belog ini sangat manjur sekali memang”
                                                </h4>
                                                <p>I Gusti Putu Suartika, Kesemutan dan sakit pinggang</p>
                                                <br/>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={ImageTesti6}/>
                                                <h4>“Kaki saya yang hampir delapan bulan tidak bisa jalan akhirnya dengan Minyak
                                                    Belog, ini saya dapat berjalan seperti biasa”
                                                </h4>
                                                <p>Mastrini Erawati, Tidak dapat berjalan</p>
                                                <br/>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={ImageTesti6}/>
                                                <h4>“Kaki saya yang hampir delapan bulan tidak bisa jalan akhirnya dengan Minyak
                                                    Belog, ini saya dapat berjalan seperti biasa”
                                                </h4>
                                                <p>Mastrini Erawati, Tidak dapat berjalan</p>
                                                <br/>
                                            </div>
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

export default Testimoni