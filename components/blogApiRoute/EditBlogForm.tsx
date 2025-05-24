"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
 
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useParams } from "next/navigation";
import { deleteImageFromFirebase, uploadFiletoFirebase } from "@/app/utils";
import Image from "next/image";
import LinkModelBox from "../linkmodelbox/linkmodelbox";
import styles from "../../app/styles/CreateBlog.module.scss"

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
const options = [
  { value: 'blogs', label: 'Blog' },
  { value: 'course-blog', label: 'Course Blog' },
  { value: 'study-aboard-blog', label: 'Study Aboard blog' }
]
const animatedComponents = makeAnimated();

const EditBlogForm = ({data}:any) => {
  const router = useRouter();
  const params = useParams();

  const { slug } = params;

  const [blogPopup, setBlogPopup] = React.useState(false);
  const [loading, setLoadig] = React.useState<Boolean>(false);
  const [category, setCategory] = useState([]);
  const [featureImage,setFeatureImage] = useState<any>(null);

  const [blogImage, setBlogImage] = useState<any>(null);

const [showUpload, setShowUpload] = useState(false);

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    mtitle: "",
    mdescription: "",
  });


  const handleSubmit = async () => {
    setLoadig(true);
    try {
      const response = await axios.patch(`/api/blog/${slug}`, {
        ...blog,
        customCategory: category,
      });
      if (response?.status === 200) {
        

        if(featureImage){
          const imageUrl = await uploadFiletoFirebase(featureImage);
          if (imageUrl) {
            const data = {
              field: "featureImage",
              url: imageUrl,
              courseId: response?.data?._id,
            };
            const response2 = await axios.put("/api/blog", data);
         
            // await deleteImageFromFirebase(blogImage);
          
          }
        }
        setLoadig(false);
        setBlogPopup(true);
        router.refresh();
      }
      
    } catch (error) {
      console.log(error);
      setLoadig(false);
    }
  };

 useEffect(() => {
  if (data) {
    setBlog({
      title: data?.title,
      content: data?.content,
      mtitle: data?.mtitle,
      mdescription: data?.mdescription,
    });
    setCategory(data?.customCategory);

    if (data?.featureImage) {
      setBlogImage(data.featureImage);
      setShowUpload(false); // Hide upload since image exists
    } else {
      setShowUpload(true); // Show upload if no image
    }
  }
}, [data]);



  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={() => router.push("/admin/bloglist")}
          modelheading="Blogs"
          itemicon="sussess"
          modelcontent="Blogs Edit Sussessfully"
        />
      )}

      <div className={styles.headingBar}>
        <h2>Edit Blog</h2>
      </div>

      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.gridLayout}>
            <div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>
                  Meta Title
                </label>
                <input
                  type="text"
                  placeholder="Meta Title"
                  name="mtitle"
                 className={styles.input}
                  required
                  value={blog?.mtitle}
                  onChange={(e: any) =>
                    setBlog({ ...blog, mtitle: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>
                  Meta description
                </label>
                <input
                  type="text"
                  placeholder="Meta description"
                  name="mdescription"
                  className={styles.input}
                  required
                  value={blog?.mdescription}
                  onChange={(e: any) =>
                    setBlog({ ...blog, mdescription: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>
                  Blog Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className={styles.input}
                  required
                  value={blog?.title}
                  onChange={(e: any) =>
                    setBlog({ ...blog, title: e.target.value })
                  }
                />
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label}>
                  Blog Category
                </label>
                <Select
                  options={options}
                  isMulti
                  components={animatedComponents}
                  onChange={(value: any) => setCategory(value)}
                  value={category}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label}>
                  Blog Content
                </label>

               
                <JoditEditor
                  value={blog.content}
                  onChange={(value) => setBlog({ ...blog, content: value })}
                   
                  tabIndex={1}  
                  
                />
              </div>


            <div className={styles.inputWrapper}>
  <h3 className={styles.label}>Featured Image</h3>

  {(!showUpload && blogImage) && (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Image
        src={blogImage}
        alt="blog image"
        width={200}
        height={200}
        style={{ borderRadius: '8px' }}
      />
      <button
        type="button"
        onClick={() => {
          setBlogImage(null);
          setShowUpload(true);
          setFeatureImage(null);
        }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 24,
          height: 24,
          cursor: 'pointer',
        }}
        aria-label="Remove image"
      >
        &times;
      </button>
    </div>
  )}

  {(showUpload || featureImage) && (
    <label className={styles.uploadLabel}>
      <svg
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <span className="mt-2 text-base leading-normal">Upload a new Image</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            setFeatureImage(e.target.files[0]);
            setBlogImage(null);  // Clear old image preview
            setShowUpload(true); // Show upload UI (optional)
          }
        }}
        name="featureImage"
        style={{ display: 'none' }}
      />
    </label>
  )}

  {/* Preview newly uploaded image */}
  {featureImage && (
    <div style={{ marginTop: 10 }}>
      <Image
        src={URL.createObjectURL(featureImage)}
        alt="Preview"
        width={200}
        height={200}
        style={{ borderRadius: '8px' }}
      />
    </div>
  )}
</div>





            </div>
          </div>

          {loading && (
            <button
            className="text-white p-2 rounded-md max-w-[636px]"
          >
           
            <div className="ball"></div>
            <div className="ball"></div>
          
             </button>
           
          )}

          {!loading && (
            <button
              onClick={handleSubmit} 
className={styles.button}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default EditBlogForm;
