import React, { useState,useEffect } from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import SkeletonBlog from '../Components/SkeletonBlog';
import { Container, Typography,Button } from '@mui/material';
import { BiLike,BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineBookmarkAdd,MdBookmarkAdded,MdOutlineIosShare } from "react-icons/md";
import Assistant from '../Components/Assistant';
import DOMPurify from "dompurify";

const SingleBlog = () => {
    const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;
    const [blog,setBlog] = useState(null);
    const [assistantState,setAssistantState] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`${SERVER_URL}/getblog/${id}`).then(resp => {
            console.log(resp.data.data)
            setBlog(resp.data.data);
        })
    },[]);
  return ( 
    <div>
        <ResponsiveAppBar/>
        <Assistant setState={setAssistantState} state={assistantState}/>
        {
            blog ? 
            <Container sx={{
                width:"65%",
                display:"flex",
                flexDirection:"column",
                p:5,
                // alignItems:"center",
                rowGap:2
                }}>
                    <Typography variant='h2'>{blog && blog.title ? blog.title : "Title"}</Typography>
                    <Typography variant='h4' sx={{color:"grey.600"}}>{blog && blog.subtitle ? blog.subtitle : "Sub-Title"}</Typography>
                    {/* <hr/> */}
                    <div className='w-full flex gap-x-5 my-4'>
                        {
                            blog && blog.user && blog.user.dp ? 
                            <img src = {blog.user.dp} className='w-14 h-14 rounded-full' />
                            : <div className='w-14 h-14 bg-black rounded-full'/>
                        }
                        <div className='w-[calc(100%-14)] h-full flex flex-col'>
                            <Typography variant='h6'> {blog  && blog.username ? blog.username : "Username"} </Typography>
                            <Typography sx={{color:"grey.600"}}>6 mins read | Published on {blog && blog.date ? blog.date : "18 May 2024"}</Typography>
                        </div>
                    </div>
                    <hr/>
                    <div className='w-full p-2 flex justify-between'>
                        <div className='flex gap-x-5 items-center'>
                            <Button sx={{color:"black",columnGap:1}} >
                                <BiLike size={20}/>
                                {blog && (blog.like !== undefined && blog.like !== null)  ? blog.like : 10}
                            </Button> 
                            
                            <Button sx={{color:"black",columnGap:1}}>
                                <FaRegComment size={20}/>
                                {blog && blog.comments ? blog.comments.length : 2}
                            </Button> 
                            
                        </div>
                        <div>
                            <div className=' flex gap-x-5 items-center'>
                                <Button sx={{color:"black",columnGap:1}}>
                                    <MdOutlineBookmarkAdd size={25} className='pt-[3px]'/>
                                </Button>
                                <Button sx={{color:"black",columnGap:1}}>
                                    <MdOutlineIosShare size={20}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div
                        className="w-full h-full m-10 !text-black sm:mx-0 prose-h1:font-sans prose prose-stone prose-headings:!text-black lg:prose-xl prose-img:mx-auto prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400 editor-output"
                        dangerouslySetInnerHTML={blog.thumbnail ? 
                            {
                                __html: DOMPurify.sanitize(
                                    `<img src="${blog.thumbnail}" />` + 
                                    blog.data
                                ),
                            } :
                            {
                                __html: DOMPurify.sanitize(
                                    blog.data
                                ),
                            }
                        }
                    ></div>
                </Container>
                :
                <SkeletonBlog/> 
        }
    </div>
  )
}

export default SingleBlog