import React,{useState} from 'react';
import ModalVideo from 'react-modal-video'

const Demo = ({demoType, item}) => {
    const [isOpen, setIsOpen] = useState(false)
    // console.log(item)
    return ( <div key={item.title} className="content-box" >
                <div className={demoType === "LTR" ? "demo rowLTR" : "demo rowRTL"}>
        <div data-ga-tag="demo" className="thumbnailSection" onClick={()=> setIsOpen(true)}>
            <img className="playBtn" src="/images/demothumbnails/playBtnSVG.svg" />
            <div className="imgContainer">
                 <img src={item.thumbnail} />
            </div>
        </div>
      
        <div className="descriptionSection">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
       
    </div>
        <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={item.videoURL}
            onClose={() => setIsOpen(false)}
        /> 
</div>

);
}
 
export default Demo;