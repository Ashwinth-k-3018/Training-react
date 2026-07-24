import React, { useRef, useState } from "react";
import "./ProfileCard.css";


export default function ProfileUpload() {
    const fileInputRef = useRef(null);

    const [profileImage, setProfileImage] = useState(null);
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);
            setProfileImage(imageURL);
        }
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        if (comment.trim() === "") return;

        setComments([...comments, comment]);
        setComment("");
    };

    return (
        <div className="container">

            <div className="profile-card">

                <h1>My Profile</h1>
                <p>Upload your profile picture</p>

                {profileImage ? (
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="profile-image"
                    />
                ) : (
                    <div className="profile-image" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#64748b",
                        fontWeight: "600"
                    }}>
                        No Image
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                />

                <button
                    className="upload-btn"
                    onClick={handleUploadClick}
                >
                    Upload Profile Picture
                </button>

                <div className="like-section">
                    <button
                        className="like-btn"
                        onClick={handleLike}
                    >
                        Like
                    </button>

                    <span>{likes} Likes</span>
                </div>

                <div className="comment-section">

                    <h3>Comments</h3>

                    <div className="comment-input">

                        <input
                            type="text"
                            placeholder="Write a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <button onClick={handleComment}>
                            Submit
                        </button>

                    </div>

                    <div className="comment-list">

                        {comments.length === 0 ? (
                            <p className="no-comment">
                                No comments yet.
                            </p>
                        ) : (
                            comments.map((item, index) => (
                                <div className="comment-box" key={index}>
                                    {item}
                                </div>
                            ))
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}