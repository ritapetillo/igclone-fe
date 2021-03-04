import React, { useState } from "react"
import "./AddPost.scss"
import { FaCameraRetro } from "react-icons/fa"
import { makeNewPost } from "../../Api/postApi"
import { createPostAction } from "../../Actions/postActions"
import { useDispatch } from "react-redux"

const AddPost = () => {
    const dispatch = useDispatch()
    const [post, setPost] = useState()
    const buildPost = (e) => {
        
        if (e.target.id === "image") {
            setPost({...post, image:e.target.files[0]})
        }
        else { setPost({...post, caption: e.target.value})}
    console.log(post)
    }
    const submitPost = () => {
        let new_post = new FormData;
        new_post.append("image", post.image)
        new_post.append("caption", post.caption)
        dispatch(createPostAction(new_post))
    }
    return(
        <div className="add-post__wrap">
            <div className="add-post__body">
                <input type="file" id="image" onChange={(e)=> buildPost(e)}/>
                <label for="image" className="add-post__input--file">
                    <FaCameraRetro/>
                    Choose a file
                </label>
                <input className="add-post__input--caption" type="text" placeholder="Type your caption here"id="caption" onChange={(e)=> buildPost(e)} />
                <input type="button" onClick={submitPost} className="add-post__input--submit"/>
            </div>
        </div>
    )
}

export default AddPost