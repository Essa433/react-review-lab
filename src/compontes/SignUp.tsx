import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUpPage() {

    return (
        <>

            <section className="allpage">
                {/* <div className="page-left"> */}
                <div className="background-img">
                    {/* <img id="main-image" src="	https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png" alt="" /> */}
                    <img id="main-image-up" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" alt="" />
                </div>
                {/* </div> */}
                <div className="page-right">
                    <div className="contain-login">

                        <div className="form-login">
                            <div className="h1">
                                <h1 className="head1">Instegram</h1>
                            </div>
                            <div>
                                <p className="p-top">Sign up to see photos and vidoes from your friends</p>
                            </div>
                            <div className="inp-btn">


                                <button className="login-btn-withface"><h1 ><FiFacebook size={17} /></h1> Login with facebook </button>
                                <div className="or">
                                    <div>
                                        <hr />
                                    </div>
                                    <div>
                                        or
                                    </div>
                                    <div>
                                        <hr />
                                    </div>
                                </div>

                                <input type="text" id="txt" placeholder="phone naumber or Email" />
                                <input type="text" id="text" placeholder="Full Name" />
                                <input type="text" id="text" placeholder="Username" />
                                <input type="text" id="text" placeholder="password" />

                            </div>


                            <div>
                                <p className="p-top-p">Sign up to see photos and vidoes from your friends <strong>Learn more</strong></p>
                            </div>
                            <div>
                                <p className="p-top-p">By sigining up, you agree to our <b>Term, Privacy, Pollicy and Cookles Pollcy</b></p>
                            </div>
                            <button className="login-btn"> Login </button>



                        </div>
                    </div>
                    <div className="section-2">
                        <p>Have an account?</p>
                        <Link to={'/login'}><a href="SignUpPage" className="p-2"><b>Log in</b></a></Link>

                    </div>
                    <div className="section-3">
                        <p className="p-app">Get the app</p>
                        <div className="donlaod-icon">
                            {/* <button className="btn-app"><img id="btn-img" src="	https://www.instagram.com/static/images/appstore-i…ges/badge_android_english-en.png/e9cd846dc748.png" alt="" /></button> */}
                            <img className="btn-app" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
                            <img className="btn-app" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}