import { NavbarPage } from "./Navbar";
import { FiMessageCircle, FiHeart, FiSend, FiMoreHorizontal, FiBookmark } from "react-icons/fi";
import React from 'react';
import '../index.css';

// export function PostPage() {

//     return (
//         <>
//             <NavbarPage />
//             <div>
//                 hi i am post
//             </div>

//         </>
//     )
// }



interface IPost {
  id: string
  title: string;
  descryption: string;
  imageUrl: string;
  likeCount: number;
  userAvatarUrl: string;
}


const posts: IPost[] = [{

  id: '1',
  title: 'Essa ALalshahi',
  descryption: 'come on ',
  // eslint-disable-next-line no-dupe-keys
  imageUrl: 'https://images.pexels.com/photos/11306305/pexels-photo-11306305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  likeCount: 0,
  userAvatarUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'

},
{

  id: '2',
  title: 'Mohammed',
  descryption: 'i am coming today',
  imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
  likeCount: 2,
  userAvatarUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600'

},
{
  id: '3',
  title: 'Saleh',
  descryption: 'dont worry we are here',
  imageUrl: 'https://images.pexels.com/photos/10673160/pexels-photo-10673160.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  likeCount: 50,
  userAvatarUrl: 'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600'

}


]


// hooks 
// const [name, setName] usestate = 










export function PostPage() {
  const postff = posts.map(post => <Post post={post}></Post>)

  return (
    <>
    <NavbarPage />
    <div className="App">
      <div className='posts'>
        {postff}
      </div>
    </div>
    </>
  );
}
interface PostProps {
  post: IPost;
}

function Post(props: PostProps) {
  return (
    <div className='post'>
      <div className='header'>
        <img src={props.post.userAvatarUrl} alt="" />
        <h1 className='h1' > {props.post.title} </h1>
        <div className="spacer"></div>
        <FiMoreHorizontal className='icone-more' size={40} />
      </div>
      <img id="img" src={props.post.imageUrl} alt="" />
      
      <footer className='footer'>
        <div className='icons'>
            <FiHeart className='icon heart' size={40} />
            <FiMessageCircle className='icon' size={40} />
            <FiSend className='icon' size={40} />
            <div className="spacer"></div>
            <FiBookmark className='icon-book' size={40} />
          </div>

          <div className="content-foot">
          <p className='p'> {props.post.descryption}</p>
          <p className='like'>{props.post.likeCount}</p>
          </div>
      </footer>

    </div>
  );
}