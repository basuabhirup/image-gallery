import React from 'react';

import ImageCard from '../ImageCard/ImageCard.js'
import './style.css';


class Gallery extends React.Component{

    constructor(props){
        super(props);
        this.state={
            images:[],
            currentAddress: ''
        }
    }

    onAddressChange = (event) => {
        this.setState({
            currentAddress: event.target.value
        })

    }

    onAddImage = () => {
        //Copy all previous images
        const newImages = [...this.state.images]

        //Add new image addess
        newImages.push(this.state.currentAddress)

        //update state by setstate
        this.setState({
            images: newImages,
            currentAddress: '',
        })
    }



    render = () =>{
        return(
            <div className="root-container">
                <p className="title">
                    ----IMAGE GALLERY----</p>
                <div className="input-box">
                    <input type="text" 
                        onChange={this.onAddressChange}
                        placeholder="Enter image URL"/>
                    <button onClick={this.onAddImage}>Add</button>
                </div>

                <div className="list-box">
                {this.state.images.map((url) => {
                    return (
                    <ImageCard key={`${url}-${Math.random()*10}`} 
                            imageURL={url}></ImageCard>
                    )
                })}
                </div>
            </div>
        );
    };
}

export default Gallery