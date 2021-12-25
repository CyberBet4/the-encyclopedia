import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const ResultCards = ({ image, title, desc, date }) => {
    return (        
        <div>
            
            <div className="d-flex justify-content-center">
                {/* card box */}
                <div className='card-box mb-3 p-2'>
                    <div className='d-flex justify-content-center'>
                        <div className='image-box mr-2' style={{backgroundImage : `url(${image})`}} ></div>
                        <div>
                            {/* title */}
                            <h3 className="link-title primary-500">
                                {title}
                            </h3>

                            {/* description */}
                            <p className="desc-txt">
                                {desc}
                            </p>
                            <p className='small-date'>Date: {date}</p>
                        </div>

                        <div style={{marginLeft : 8}}>
                            <FiExternalLink style={{ color : '#33415C'}} />
                        </div>
                    </div>
                    {/* <p className='small-date'>Date: {date}</p> */}
                </div>
                {/* card box has ended */}
            </div>
        </div>
    )
}

export default ResultCards
