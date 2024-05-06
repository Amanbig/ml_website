import React, { useState } from 'react';
import Forms from './Forms';

function Predictions(props) {
    const options = [
        { value: 1, label: 'Building Windows Float Processed' },
        { value: 2, label: 'Building Windows Non Float Processed' },
        { value: 3, label: 'Vehicle Windows Float Processed' },
        { value: 4, label: 'Vehicle Windows Non Float Processed' },
        { value: 5, label: 'Containers' },
        { value: 6, label: 'Tableware' },
        { value: 7, label: 'Headlamps' }
    ];
    const [backs,setbacks] = useState(false)

    // Define object to map prediction labels to online image URLs
    const imageUrls = {
        'Building Windows Float Processed': 'https://uploads.prod01.sydney.platformos.com/instances/205/images/0207924a-6a13-4f1f-95d0-5f0067ad52fd/large_windows.jpeg',
        'Building Windows Non Float Processed': 'https://image.made-in-china.com/202f0j00UJtTfgpAhvom/Beautiful-Blue-Colorful-Tinted-Float-Glass-for-Building-Windows.jpg',
        'Vehicle Windows Float Processed': 'https://ase-europe.com/wp-content/uploads/2017/02/automobile.jpg',
        'Vehicle Windows Non Float Processed': 'https://th.bing.com/th/id/OIP.G0arYUjt7h5rZzKHwtCJ1AHaE8?rs=1&pid=ImgDetMain',
        'Containers': 'https://th.bing.com/th/id/OIP.aULxUB0-TdiduX1FGLLVKAHaHa?rs=1&pid=ImgDetMain',
        'Tableware': 'https://th.bing.com/th/id/OIP.ZTcD0O1mFyb_SF3gb2RVAgHaG4?rs=1&pid=ImgDetMain',
        'Headlamps': 'https://th.bing.com/th/id/OIP.PazddBOMP2Xa3AH8m3U9aQHaHa?rs=1&pid=ImgDetMain'
    };

    const predictionLabel = props.pred && options[props.pred - 1] ? options[props.pred - 1].label : 'Unknown';
    const imageUrl = imageUrls[predictionLabel] || 'https://image.made-in-china.com/202f0j00UJtTfgpAhvom/Beautiful-Blue-Colorful-Tinted-Float-Glass-for-Building-Windows.jpg'; 

    return (
        backs?<Forms submits={false}/>:<div className='d-flex justify-content-center'>
            <div className="card m-6">
                <img src={imageUrl} className="card-img-top" alt={predictionLabel} />
                <div className="card-body">
                    <p className="card-text"><span>Type of Glass: </span><b>{predictionLabel}</b></p>
                    <button className="btn btn-primary" onClick={()=>setbacks(true)}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default Predictions;
