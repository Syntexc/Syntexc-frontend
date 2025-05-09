import Image from "next/image";
import Style from "./blogsection.module.scss"


interface BlogCardProp {
    image?: any;
    title?: string;
    datess?: string;
     
}

const BlogCard = ({
    image,
    title,
    datess,
}: BlogCardProp) => {
    return (
        <>
            <div className={Style.box}>
            <div className={Style.image}>
                    <Image src={image}  width={300} height={200} alt={"test"} objectFit="cover"   />
                </div>
                <div className={Style.contant}>
                <h4>{title}</h4>
                <p>{datess}</p>
            </div>
            </div>
           
        </>
    )
}

export default BlogCard;