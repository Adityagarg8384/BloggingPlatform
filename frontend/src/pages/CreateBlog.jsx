import React, { useEffect, useState } from 'react';
import TipTap from "./../Components/Tiptap";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router-dom";
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import DialogBox from '../Components/DialogBox';
import Assistant from '../Components/Assistant';

const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

function CreateBlog() {

    const [content, setContent] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [heading, setHeading] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [subtopics, setSubtopics] = useState([]);
    const [prob, setProb] = useState(); 
    const [secondcontent, setSecondContent] = useState("");

    const blog_id = useParams().blog_id; 
    const navigate = useNavigate();
    const [assistantState,setAssistantState] = useState(false);
    const pyth_url  = import.meta.env.VITE_REACT_APP_PYTHON_URL;
    const [success, setSuccess] = useState();
    const [addTags, setAddTags] = useState(false);

    const handleTags = (flag) => {
        setAddTags(false);
        if (!flag) {
            setSubtopics([]);
        }
    }
    // Rewrite this func, abhi galt h
    
    const checkContent=async()=>{
        const secondresponse = await fetch(`${pyth_url}/classify_ai_text`, {
            method:'POST',
            headers: {
                Authorization: "Bearer your-jwt-token", // include JWT in the request header
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: content }),
        });

        const res = await secondresponse.json();
        setProb(res.data.probability_of_ai_text);
    }

    const handleSubmit = async () => {
        const blogData = {
            tags: subtopics,
            data: content,
            title: heading,
            subtitle: subtitle,
            thumbnail,
        };

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
                navigate("/");
            }
        }
    }

    return (
        <>
            <ResponsiveAppBar />
            <Assistant state={assistantState} setState={setAssistantState} />
            {addTags && (
                <DialogBox
                    handleSubmit={handleTags}
                    subtopics={subtopics}
                    setSubtopics={setSubtopics}
                />
            )}
        
            <div className="container mx-auto mt-32 lg:mt-10 px-4">
                <div className="mt-16 flex flex-col lg:flex-row items-center min-h-[800px] w-full text-white">
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
                        secondcontent={secondcontent}
                        setSecondContent={setSecondContent}
                    />
                    <div className="flex justify-center gap-7 w-full h-full">
                        <div
                            className="w-full lg:w-[97%] min-h-[800px] h-full m-10 text-black sm:mx-0 prose-h1:font-sans rounded-xl shadow-[0_0_60px_20px_rgb(0,0,0,0.22)] p-10 pt-2 prose prose-stone prose-headings:text-black lg:prose-xl prose-img:mx-auto prose-img:rounded-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-400 editor-output bg-white bg-opacity-90"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    `<h1>${heading}</h1>` + `<h3>${subtitle}</h3>` + `<img src="${thumbnail}" />` + content
                                ),
                            }}
                        ></div>
                    </div>
                </div>
                <div className="m-3 flex flex-col lg:flex-row items-center justify-center">
                    <button
                        type="button"
                        className="text-white px-10 py-2 rounded-xl font-extrabold m-4 w-full lg:w-1/3 text-center justify-center"
                        style={{ backgroundColor: '#36454F' }}
                        onClick={() => setAddTags(true)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2c3a45'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#36454F'}
                    >
                        Add Tags
                    </button>
                    <button
                        type="button"
                        className="text-white px-10 py-2 rounded-xl font-extrabold m-4 w-full lg:w-1/3 text-center justify-center"
                        style={{ backgroundColor: '#36454F' }}
                        onClick={handleSubmit}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2c3a45'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#36454F'}
                    >
                        Publish Blog 
                    </button>
                    <button
                        type="button"
                        className="text-white px-10 py-2 rounded-xl font-extrabold m-4 w-full lg:w-1/3 text-center justify-center"
                        style={{ backgroundColor: '#36454F' }}
                        onClick={checkContent}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2c3a45'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#36454F'}
                    >
                        Check AI Content
                    </button>
                </div>
            </div>
        </>
    );
}

export default CreateBlog;
