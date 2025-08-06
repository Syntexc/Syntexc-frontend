// app/singleblog/[id]/page.tsx
import Image from "next/image";
import Style from "../style.module.scss";
import FeaturedReads from "@/components/Blog/FeaturedReads/page";
import JustReading from "@/components/Singleblog/JustReading/page";
import { connect } from "@/app/dbConfig";
import Blog from "@/app/models/blogModels";
import { Metadata } from "next";

const getSingleBlog = async (slug: string) => {
  try {
    await connect();
    const blog = await Blog.findOne({ slug });
    return blog;
  } catch (error) {
    return null;
  }
};
 
export async function generateMetadata({
  params,
}: any): Promise<Metadata> {
  const blog = await getSingleBlog(params.id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist or was removed.",
    };
  }

  return {
    title: blog.mtitle || blog.title || "Blog Post",
    description: blog.mdesc || "Read this insightful blog post.",
  };
}
 
const SingleBlog = async ({ params }: any) => {
  const response = await getSingleBlog(params.id);

  if (!response) return <div>Blog not found</div>;

  return (
    <div className={Style.blogsingle}>
      <div className={Style.innerblog}>
        <div className={Style.title}>
          <h1>{response?.title}</h1>
        </div>

        <div className={Style.content}>
          <div className={Style.img}>
            <Image
              src={response?.featureImage}
              alt={response?.title || ""}
              width={775}
              height={460}
              priority
            />
          </div>

          <div
            className={Style.textblock}
            dangerouslySetInnerHTML={{ __html: response?.content }}
          />
        </div>
      </div>

      <FeaturedReads />
      <JustReading />
    </div>
  );
};

export default SingleBlog;