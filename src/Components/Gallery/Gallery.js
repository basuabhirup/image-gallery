import React from 'react';

import './style.css';


class Gallery extends React.Component{

    render = () =>{
        return(
            <div className="root-container">
                <p className="title">
                    ----IMAGE GALLERY----</p>
                <div className="input-box">
                    <input type="text"
                        placeholder="Enter image URL"/>
                    <button>Add</button>
                </div>


            </div>
        )
    }
}

export default Gallery