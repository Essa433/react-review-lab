import { NavbarPage } from "./Navbar";
import { FiCheck, FiChevronDown, FiSettings, FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";



export function HomePage() {
    return (
        <>

            <NavbarPage />

            <Link to={'/login'}>login</Link>

            <div className="container" >

                <div className="container-up">
                    <div className="con-aft">

                        <img className="aftar" src="./aftar.jpg" alt="" />
                    </div>

                    <div className="right-up">
                        <div className="f-right-up">
                            <h2>Verge</h2>
                            <div>
                                <h1 className="h1-f" ><FiCheck size={15} /></h1>
                            </div>

                            <div className="btn-up">
                                <button className="btn-1">Following</button>

                                <Link to={'/setting'}><button className="btn-1"><FiSettings size={10} /></button></Link>
                            </div>

                            <div>
                                <h1 ><FiMoreHorizontal size={20} /></h1>
                            </div>

                        </div>
                        <div className="followers">
                            <span className="dd"><b>1,686</b> posts</span>
                            <span className="dd"><b>897K</b> followers</span>
                            <span className="dd"><b>78</b> following</span>
                        </div>
                        <div className="pragraph">
                            <p> <b>The verge</b> orginal photo to photography vidio form the fage, wich the
                                futureof </p>
                            <p className="hash">#technology, #scince, #art, and #culture. #photofday #instance #techie <br />
                                <b>TheVerge.come</b></p>
                        </div>

                    </div>
                </div>


                <div className="container-down">

                    <img className="pro-img" src="./cat.jpg" alt="" />

                    <img className="pro-img" src="./orange.jpg" alt="" />

                    <img className="pro-img" src="./dd.jpg" alt="" />
                </div>

            </div>
        </>
    )
}