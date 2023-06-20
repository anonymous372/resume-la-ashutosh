import React from 'react';
import {AiFillCaretRight, AiFillInstagram, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

function Post() {
    const postDetails = {
        img:"http://nunforest.com/mite-demo/upload/single/1@2x.jpg",
        title:"Vivamus vestibulum ntulla necante.",
        description:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Phasellus hendrerit. Pellentesque aliquet nibh nec urna. 
        In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo

        Thank You
        `,
        date:Date.now()
    }

    return (
        <div className='w-[100%] pt-16 flex justify-center'>
            <div className="box-border w-[70%] px-[5%] flex justify-between max-[1000px]:items-center max-[1000px]:w-[90%] max-[1000px]:flex-col">
                <div class='sk-ww-medium-publication-feed' data-embed-id='156712'></div>
            </div>
        </div>
     );
}

export default Post;