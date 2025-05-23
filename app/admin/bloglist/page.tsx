
import React from "react"; 
import Image from "next/image";
import Blog from "@/app/models/blogModels"; 
import Link from "next/link"; 
import styles from "@/app/styles/BlogList.module.scss";
import SideBarLayout from "@/components/SideBarLayout";
import { connect } from "@/app/dbConfig";
import DeleteBlogButton from "@/components/blogApiRoute/DeleteBlogButton";

const getAllBlogs = async () => {
  try {
    connect();
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    return error;
  }
};



const BlogList = async () => {
  const response: any = await getAllBlogs();
  console.log("response", {response});
  return (
    <> 

<SideBarLayout>
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>Blog List</h4>
        <Link href="/admin/create-blog">
          <button className={styles.button}>Create Blog</button>
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>Blog Image</th>
                <th>Blog Slug</th>
                <th>Blog Name</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {response?.map((blogs: any, index: number) => (
                <tr className={styles.tableRow} key={index}>
                  <td className={styles.tableCell}>
                  <Image src={blogs?.featureImage} width={50} height={50} alt="blog" />
                  </td>
                  <td className={styles.tableCell}>
                  <div className={styles.titleClamp} title={blogs?.slug}>
                    {blogs?.slug}
                  </div>
                  </td>
                  <td className={styles.tableCell}>
                  <div className={styles.titleClamp} title={blogs?.title}>
                    {blogs?.title}
                  </div>
                  </td>
                  <td className={styles.tableCell}>{blogs?.customCategory[0]?.label}</td>
                  <td className={styles.tableCell}>
                  <div className={styles.actions}>
                    <Link href={`/admin/newdashboard/bloglist/edit-blog/${blogs?.slug}`} className={styles.actionIcon}>
                    <Image src="/edit-box-line.svg" width={15} height={15} alt="edit" />
                    </Link>
                    <DeleteBlogButton id={blogs?._id} model="blog" />
                  </div>
                  </td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</SideBarLayout>

    </>
  );
};
export default BlogList;
