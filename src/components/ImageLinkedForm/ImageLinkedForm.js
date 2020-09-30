import React from 'react';
import './ImageLinkedForm.css';

const ImageLinkedForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className='f3 gold'>
                {'This App will detect faces in your pictures.'}
            </p>
            <p className='f3 gold'>
                {'Input your image link below.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f3 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-green'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkedForm;