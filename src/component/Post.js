import React from 'react';
import {AiFillCaretRight, AiFillInstagram, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

function Post() {
    const postDetails = {
        img:"http://nunforest.com/mite-demo/upload/single/1@2x.jpg",
        title:"Vivamus vestibulum ntulla necante.",
        description:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
        aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo
        `,
        date:Date.now()
    }

    return (
        <div className='w-[100%] pt-16 flex justify-center'>
            <div className="box-border w-[70%] px-[5%] flex justify-between max-[1000px]:items-center max-[1000px]:w-[90%] max-[1000px]:flex-col">
                <div className="w-[70%] max-[1000px]:w-[100%] flex flex-col">
                    <div className="w-[100%] mb-4">
                        <img src={postDetails.img} alt="post image" />
                    </div>
                    <div className="text-slate-600">
                        <p>1 week ago</p>
                    </div>
                    <div className="">
                        <div className="mb-5 text-2xl font-bold text-slate-700">
                            <h3>{postDetails.title}</h3>
                        </div>
                        <div className="text-slate-500 text-lg">
                            <p>{postDetails.description}<br/><br/>{postDetails.description}</p>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] max-[1000px]:mt-16 max-[1000px]:w-[100%]'>
                    <div className='flex items-center justify-between text-2xl'>
                            <AiFillInstagram  className='text-rose-600'/>
                            <AiFillFacebook   className='text-blue-500'/>
                            <AiOutlineTwitter className='text-sky-500'/>
                    </div>
                    <div>
                        <h3 className='pt-5 pb-3 border-b text-slate-800'>Categories</h3>
                        <p className='flex items-center justify-between text-slate-600 pt-2'><span>category 1</span> <AiFillCaretRight/></p>
                        <p className='flex items-center justify-between text-slate-600 pt-2'><span>category 1</span> <AiFillCaretRight/></p>
                        <p className='flex items-center justify-between text-slate-600 pt-2'><span>category 1</span> <AiFillCaretRight/></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Post;