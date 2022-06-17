import React from "react"
import Media from "./Media"
import '../App.css';

function CampaignItems( items, key ){
    console.log(items)
    return(
        <div>
            <div className="campaign-header">
                <img src={items.campaign_icon_url} className="campaign-header-icon"/>
                <div className="campaign-header-description">
                    <h2>{items.campaign_name}</h2>
                    <p className="campaign-header-perInstall"><span className="campaign-header-description-bold">{items.pay_per_install}</span> per install</p>
                </div>
            </div>
            <div className="campaign-media-list">
                {items.medias.map(item => {
                    return <Media {...item}/>
                })}
            </div>
        </div>
    )
}

export default CampaignItems;