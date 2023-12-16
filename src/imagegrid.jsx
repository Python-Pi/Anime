import React from "react";

function ImageGrid(info){
    const jsxStyle = {
        width: '400px',
        height: '300px',
        borderRadius: '21px 21px 0 0',
        objectFit: 'cover', 
      }


      return <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" >
                <div className="my-3 p-3">
                    <h2 className="display-5">{info.head}</h2>
                </div>
                <img src={info.img} style={jsxStyle} alt='Your Name'></img>

            </div>
}

export default ImageGrid;