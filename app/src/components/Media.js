import React, { useState } from "react";
import download from "../images/download.svg"
import link from "../images/link.svg"
import play from "../images/play.png"

function Media( item ){
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async copyMe => {
        try {
        await navigator.clipboard.writeText(item.tracking_link);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return(
        <div>
            <div className="campaign-media">
                <img src={item.cover_photo_url} className="campaign-media-cover"/>
                {item.media_type === "video" ? <img class="campaign-media-playButton" src={play}/> : ""}
            </div>
            <button className="campaign-media-button" onClick={copyToClipboard}><img src={link}/></button>
            <a target="_blank" href={item.download_url} download>
                <button className="campaign-media-button"><img src={download}/></button>
            </a>
            {copySuccess && alert(copySuccess)}
        </div>
    )
}

export default Media;