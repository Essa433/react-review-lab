import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

export function LoginPage() {

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
                                <h1>Instegram</h1>
                            </div>
                            <div className="inp-btn">

                                <input type="text" id="text" placeholder="phone name" />
                                <input type="text" id="text" placeholder="password" />
                                <button className="login-btn"> Login </button>

                            </div>

                            <div className="or">
                               
                                
                                
                            </div>
                            <div className="icn-p">
                                <h1 ><FiFacebook size={17} /></h1>
                                <p>Log in with facebook</p>
                            </div>

                            <div className="forget">
                                forget password?
                            </div>
                        </div>
                    </div>
                    <div className="section-2">
                        <p>Don`t have an account?</p>
                        {/* <a href="SignUpPage" className="p-2"><b>Sign up</b></a> */}
                        <Link to={'/signup'}><a href="SignUpPage" className="p-2"><b>Sign up</b></a></Link>
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