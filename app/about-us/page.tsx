import LetTalk from "@/components/LetTalk/page";
import Builtto from "../builtto/page";
import OurLeadershipTeam from "../ourleadershipteam/page";
import TheCore from "@/components/TheCore/page";
import Webring from "@/components/Webring/page";
import OurStory from "@/components/OurStory/page";
import Aboutbanner from "@/components/Aboutbanner/page";

const AboutUs = ()=>{
    return(
        <>
        <Aboutbanner /> 
        <OurStory />
        <Webring />
        <TheCore />
        <OurLeadershipTeam />
        <Builtto /> 
        <LetTalk />
        </>
    )
}
export default AboutUs;