import AudienceIcon from "./AudienceIcon"
import AudienceCount from "./AudienceCount"
import Timer from "./Timer"

export default function StreamStats(){
    return(
        <div className='stats-container'>
            <AudienceIcon/>
            <AudienceCount/>
            <Timer/>
        </div>
    )
}