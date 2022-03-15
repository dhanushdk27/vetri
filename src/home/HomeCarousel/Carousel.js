import React from 'react';
import { Carousel } from 'antd';


function Slide(props) {
    const contentStyle = {
        // height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>gfcghc</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>cccbcb</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>vb bv</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>vb bv</h3>
                </div>
            </Carousel>
        </div>
    );
}

export default Slide;