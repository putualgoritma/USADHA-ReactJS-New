import React from "react";
import { Fragment } from "react";
import {Header,Footer} from '../../component'
import { ImageAbout } from "../../assets";

const About=()=>{
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
                                        <a href="testimoni.html">Tentang Minyak Belog</a>
                                    </strong>
                                </h1>
                                <strong></strong>
                            </div>
                            <a className="post-img" href="blog-detail.html">
                                <img src={ImageAbout} alt="alt"/></a>
                            <div className="post-content" style={{marginTop: 20} }>
                                <h3 className="text0">Apa itu Minyak Belog?
                                </h3>
                                <p className="text2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                    recently with desktop publishing software like Aldus
                                </p>
                                <h3 className="text0">Filosofi Minyak Belog
                                </h3>
                                <p className="text3">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                    in a piece of classical Latin literature from 45 BC, making it over 2000 years
                                    old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                                    Virginia.
                                </p>
                                <h3 className="text0">Sejarah Minyak Belog
                                </h3>
                                <p className="text4">
                                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                                    Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                                    is a treatise on the theory of ethics, very popular during the Renaissance. The
                                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                                    section 1.10.32.
                                </p>
                                <p className="text5">
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                                    those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                                    Malorum" by Cicero are also reproduced in their exact original form, accompanied
                                    by English versions from the 1914 translation by H. Rackham. "Sed ut
                                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                                    eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                    consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </p>
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
export default About