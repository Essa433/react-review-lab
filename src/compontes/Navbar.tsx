import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiCompass, FiUser, FiHeart } from "react-icons/fi";

export function NavbarPage() {

    return (
        <>
            <nav className='navbar' >

                <div className='nav-left'>
                    
                    <Link to={'/posts'}><h1 className='icon-ins'><FiInstagram size={20} /></h1></Link><br />
                

                    <div> | </div>

                    <div>
                    <Link to={'/'}><a className='inst-word'> Instegram </a></Link><br />
                    </div>
                </div>

                <div className='search'>
                    <a><input type="text" name='search' placeholder='search' /> </a>
                </div>

                <div className='icon-right-nav'>

                    <h1 ><FiCompass size={20} /></h1>
                    <h1 ><FiHeart size={20} /></h1>
                    {/* <h1 ><FiUser size={20} /></h1> */}
                    <Link to={'/profile'}><h1 ><FiUser size={20} /></h1></Link><br />
                </div>



            </nav>

            <hr />
            <div>
                {/* <Link to={'/'}>Home</Link><br />
                <Link to={'/profile'}>profile</Link><br /> */}
                {/* <Link to={'/posts'}>Post</Link><br /> */}
                {/* <Link to={'/setting'}>Setting</Link> */}

            </div>
            {/* <div class="nav">
        <!-- <ul > -->
        <a class="txt-nav">skateboard</a>
        <a><input class="search" type="text" name="search" placeholder="Search"></a>
        <div class="nav-right">
            <img class="nav-img" src="./images/image 14.png" alt="" width="20px" height="20px">
            <a class="nav-img">Thomas</a>
            <img class="n-img" src="./images/chevron_down.png" alt="">
            <img class="note-img" src="./images/Group 377.png" alt="">
        </div> */}
        </>
    )
}