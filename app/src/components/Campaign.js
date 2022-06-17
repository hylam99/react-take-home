import React from "react"
import CampaignItems from "./CampaignItems"

function Campaign(){
    const [campaignData, setcampaignData] = React.useState([])

    // Get data from JSON
    React.useEffect(() => {
        fetch("https://www.plugco.in/public/take_home_sample_feed")
            .then(res => res.json())
            .then(data => setcampaignData(data.campaigns))
         
    }, [])

    console.log(campaignData)  
    return(
    <div>
        {campaignData.map(item => {
            return <CampaignItems {...item} />
        })}
    </div>)
}

export default Campaign;