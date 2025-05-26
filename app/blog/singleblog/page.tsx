
import Image from "next/image";
import Style from "./style.module.scss"
import FeaturedReads from "@/components/Blog/FeaturedReads/page";
import JustReading from "@/components/Singleblog/JustReading/page";

const SingleBlog = ()=>{
    return(
        <>
        <div className={Style.blogsingle}>
<div className={Style.innerblog}>
    <div className={Style.title}>
        <h1>
Not Just Another Blog.
It’s Our Brain in the Cloud.
        </h1>
        <p>
            From decoding Salesforce updates to sharing what worked (and what didn’t), this is where we think out loud, so you don’t have to guess twice. 
        </p>
    </div>


<div className={Style.content}>
    <div className={Style.img}>
        <Image src={"/singleblog.png"} alt={""} width={882} height={564} />
    </div>

    <div className={Style.textblock}>
        <h4>What is Lorem Ipsum?</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <h4>Why do we use it?</h4>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>


        <h4>Where does it come from?</h4>
       <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>


       <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    </div>
</div>


</div>
<FeaturedReads />
<JustReading />


        </div>
        </>
    )
}
export default SingleBlog;