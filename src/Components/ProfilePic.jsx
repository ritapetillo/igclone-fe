import React from "react"
import "../Styling/Shapes.scss"

const ProfilePicture = () => {
    return (<><div className="story-lg">
        <img src="http://placehold.it/150x150" className="circle-lg"/>
    </div>
    <div className='circle-md' style={{background: "red"}}></div>
    <div className='circle-sm' style={{background: "red"}}></div>
    </>
    )
}

export default ProfilePicture