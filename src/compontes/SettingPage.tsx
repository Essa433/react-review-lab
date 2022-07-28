import { NavbarPage } from "./Navbar";


export function SettingPage() {

    return (
        <>
            <NavbarPage />
            <div>hello i am setting page </div>
            <div className="v-nav">
                <ul>
                    <h6>menu</h6>
                    <div className="menu">
                        <div className="side-content">
                            <div className="def-font">

                                <li><a>Discover</a></li>
                            </div>
                        </div>
                    </div>

                    <div className="side-content">
                        <li><a>Trending</a></li>
                    </div>
                    <div className="side-content">
                        <li><a>Straming</a></li>
                    </div>
                    <div className="side-content">
                        <li><a>playlist</a></li>
                    </div>
                    <div className="side-content">
                        <li><a>Bookmark</a></li>
                    </div>
                </ul>
            </div>
            {/* </div> <hr>
            <div>
                <h6>catogary</h6>
                <div className="menu">
                    <div className="side-content">
                        <li><a>Discover</a></li>
                    </div>
                    <div className="side-content">
                        <li><a>Trending</a></li>
                    </div>
                    <div className="side-content">
                        <li><a>Straming</a></li>
                    </div>
                    <div className="side-content">

                        <li><a>playlist</a></li>
                    </div>

                </div>
            </div> */}
        </>
    )
}