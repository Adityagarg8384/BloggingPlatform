import React from 'react'
import { useEffect, useState } from "react";
import TipTap from "./../Components/Tiptap";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router-dom";
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import DialogBox from '../Components/DialogBox';
import Assistant from '../Components/Assistant';

const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

function CreateBlog() {

    const [content, setContent] = useState("");
    const [subtitle,setSubTitle] = useState("");
    const [heading, setHeading] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [subtopics, setSubtopics] = useState([]);
    const [prob, setProb]= useState(); 
    // possible scenerios

    // 1. new article editor empty useParams

    // 2. old draft editor non empty useParams

    const blog_id = useParams().blog_id; 
    const navigate = useNavigate();
    const [assistantState,setAssistantState] = useState(false);
    
    const [success, setSuccess] = useState();
    const [addTags,setAddTags] = useState(false);
    const handleTags = (flag) =>{
        setAddTags(false);
        if(!flag){
            setSubtopics([]);
        }
        // console.log("tags aagye:: ",subtopics);
    }
    // Rewrite this func, abhi galt h 
    const handleSubmit = async () => {
        // console.log(subtopics)
        const blogData = {
            tags : subtopics,
            data : content,
            title: heading,
            subtitle : subtitle,
            thumbnail,
        };
        // if (blog_id) blogData.blog_id = blog_id;
        const token = localStorage.getItem("token");
        const response = await fetch(`${SERVER_URL}/createblog`, {
            method: "POST",
            headers: {
                Authorization: token, // include JWT in the request header
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData),
        });
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                // window.location.href =
                // "/blogs/" + data._doc._id + "/" + data._doc.title;
                
                // Navigate to the blog ya profile
                navigate("/");
            }
        }

        const secondresponse = await fetch("http://127.0.0.1:5000/", {
            method:'POST',
            headers: {
                Authorization: "Bearer your-jwt-token", // include JWT in the request header
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text:content}),
        })

        if (!secondresponse.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();

        setProb(res.probability_of_ai_text);
    }
  return (
    <>
        <ResponsiveAppBar/>
        <Assistant state={assistantState} setState={setAssistantState}/>
        {
            addTags ? (
            <>
                <DialogBox
                    handleSubmit={handleTags}
                    subtopics={subtopics}
                    setSubtopics={setSubtopics}
                />
            </>
            ) : (
                <></>
        )}
        <div className="!h-max mt-32 lg:mt-10 ml-2">
            <div className="mt-16 flex flex-row h-full items-center min-h-[800px] w-full !text-white">
                <TipTap
                    setSubTitle={setSubTitle}
                    subtitle={subtitle}
                    setContent={setContent}
                    content={content}
                    heading={heading}
                    setHeading={setHeading}
                    thumbnail={thumbnail}
                    setThumbnail={setThumbnail}
                    success={success}
                />
                <div className="flex justify-center gap-7 w-full h-full">
                    <div
                        className="!w-[97%] min-h-[800px] !h-full m-10 !text-black sm:mx-0  prose-h1:font-sans rounded-xl shadow-[0_0_60px_20px_rgb(0,0,0,0.22)] p-10 pt-2 prose prose-stone prose-headings:!text-black lg:prose-xl prose-img:mx-auto prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400 editor-output"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                `<h1>${heading}</h1>` + `<h3>${subtitle}</h3>` + `<img src="${thumbnail}" />` + content
                            ),
                        }}
                    ></div>
                </div>
            </div>
            <div className="m-3 flex items-center justify-center">
                <button
                type="button"
                className="text-white bg-green-600 hover:bg-green-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
                onClick={()=> setAddTags(true)}
                >
                    Add Tags
                </button>
                <button
                type="button"
                className="text-white bg-green-600 hover:bg-green-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
                onClick={handleSubmit}
                >
                    Publish Blog
                </button>

            </div>
        </div>
    </>
  );
}


export default CreateBlog;