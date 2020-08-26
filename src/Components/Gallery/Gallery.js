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
    //following will be executed on changing the input text field:
    onAddressChange = (event) => {
        this.setState({
            currentAddress: event.target.value
        })

    }
    //following will be executed on clicking the "Add" button:
    onAddImage = () => {
        if (this.state.currentAddress==="") {
            return window.alert("Please give an image URL")
        }
        //Copy all previous images
        const newImages = [...this.state.images]

        //Add new image address
        newImages.push(this.state.currentAddress)

        //update state by setstate
        this.setState({
            images: newImages,
            currentAddress: ''
        })
    }



    render = () =>{
        return(
            <div className="root-container">

                <p className="title">
                    ----IMAGE GALLERY----</p>

                <div className="input-box">
    {/* onAdressChange function will be called now: */}
                    <input type="text"
                        value = {this.state.currentAddress}
                        onChange={this.onAddressChange}
                        placeholder="Enter image URL"/>
    {/* onAddImage function will be called now: */}
                    <button onClick={this.onAddImage}>Add</button>
                </div>

                <div className="list-box">
                {this.state.images.map((url) => {
                    return (
                        <ImageCard key={url} 
                                    imageURL={url}></ImageCard>
                    )
                })}
                </div>

            </div>
        );
    };
}

export default Gallery