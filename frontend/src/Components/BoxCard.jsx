import logo1 from "./smth.jpg"
import {PiHandsClappingLight} from "react-icons/pi";
import {BiMessageRounded} from "react-icons/bi";
import {MdOutlineBookmarkAdd} from "react-icons/md"
const BoxCard = ({name,content,image,date,likes,comments}) => {
    const logo = image ? image : logo1;
    content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis minima harum impedit ratione. Repellendus, quasi id eveniet similique aut cupiditate non enim impedit laboriosam fugiat! Iste laborum voluptatibus laboriosam! Doloribus aliquid iste in iure culpa non! Rem, nobis pariatur eligendi rerum perspiciatis consectetur quaerat minima officia possimus ratione voluptatum fuga."
    var newContent;
    if (content){
        if(content.length > 50){
            newContent = content.substring(0,50);
            newContent += "...";
        }
        else{
            newContent = content;
        }
    }
    return (  
        <div className="flex flex-col w-[300px] h-auto my-8 p-0 mx-5 text-white gap-y-3">
            <div className="w-full h-[250px] flex justify-center">
                <img src={logo} className="w-[300px] h-full cover" />
            </div>
            <div className="flex gap-x-2 w-full">
                <div className="hover:opacity-60 rounded-full h-[20px] w-[20px]"><img src = {logo} className="rounded-full h-full w-full"></img></div>
                <div className="flex gap-x-2">
                    <p className="hover:underline">User</p> in <p className="hover:underline">Title</p>
                </div>
            </div>
            <div className="block w-full ">
                <h1 className="font-bold text-xl my-2">{name ? name : "Lorem ipsum dolor sit amet consectetur adipisicing."}</h1>
                <p title={newContent != content ? content : null}>
                    {content ? newContent : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores? " } 
                </p>
            </div>
            <div className="flex gap-x-2">
                <p className="text-sm ">10 min read</p>
                <div>|</div>
                <p className="text-sm ">{date ? date : "Date"} </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-x-5 ">
                    <div className="flex gap-x-1">
                        <div className="hover:opacity-60 ">
                            <PiHandsClappingLight style={{width:"20px",height:"20px"}}/>
                        </div>
                        <div className="hover:opacity-60">
                            {likes || likes == 0  ? likes : "20"}
                        </div>
                    </div>
                    <div className="flex hover:opacity-60 gap-x-1">
                        <BiMessageRounded style={{width:"20px",height:"20px",marginTop:"2px"}}/> {comments ? comments : "30"}
                    </div>
                </div>
                <div className="">
                    <MdOutlineBookmarkAdd style={{width:"20px",height:"20px"}}/>
                </div>
            </div>
        </div>
    );
}
 
export default BoxCard;