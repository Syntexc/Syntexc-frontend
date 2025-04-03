import Style from "./ratingcard.module.scss"
import Image from "next/image";
interface RatingCardProp {
    image?: any;
    username?: string;
    role?: string;
    desc?: string;
}
const RatingCard = ({
    image,
    username,
    role,
    desc,
}: RatingCardProp) => {
    return (
        <>
            <div className={Style.ratingcard}>
                <div className={Style.innnerbox}>
                    <div className={Style.image}>
                        <Image src={image} alt={"star"} width={"42"} height={"42"} />
                        </div>
                    <div className={Style.content}>
                        <h3>{username}</h3>
                        <p>{role}</p>
                        <ul className={Style.star} >
                            <li><Image src={"/star.svg"} alt={"star"} width={"11"} height={"11"} /></li>
                            <li><Image src={"/star.svg"} alt={"star"} width={"11"} height={"11"} /></li>
                            <li><Image src={"/star.svg"} alt={"star"} width={"11"} height={"11"} /></li>
                            <li><Image src={"/star.svg"} alt={"star"} width={"11"} height={"11"} /></li>
                            <li><Image src={"/star.svg"} alt={"star"} width={"11"} height={"11"} /></li>
                        </ul>
                        <p className={Style.desc} > {desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RatingCard;