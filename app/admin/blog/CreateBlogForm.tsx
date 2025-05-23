"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react"; 
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import LinkModelBox from "@/components/linkmodelbox/linkmodelbox";
import styles from "../../styles/CreateBlog.module.scss" 
import dynamic from "next/dynamic";
 
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
const options = [
  { value: 'Salesforce Insights', label: 'Salesforce Insights' },
  { value: 'Culture', label: 'Culture' },
  { value: 'Tech & Tools', label: 'Tech & Tools' },
  { value: 'Staff Augmentation & Talent', label: 'Staff Augmentation & Talent' },
  { value: 'Salesforce Appexchange', label: 'Salesforce Appexchange' }, 
];
const animatedComponents = makeAnimated();

const CreateBlogfname = () => {
  const router = useRouter();
  const [blogPopup, setBlogPopup] = React.useState(false);
  const [loading, setLoadig] = React.useState(false);
  const [category, setCategory] = React.useState([]);
const [previewImage, setPreviewImage] = React.useState<string | null>(null);
const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleCategory = (value: any) => {
    setCategory(value);
  };
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};
const handleRemoveImage = () => {
  setPreviewImage(null);
  setSelectedFile(null);
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoadig(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("customCategory", JSON.stringify(category));
    formData.append("content", JSON.stringify(state.content));
    if (selectedFile) {
      formData.append("featureImage", selectedFile);
    }
    
    const response = await axios.post("/api/blog/create-blog", formData);
    console.log("response", response);
    router.refresh();
    setLoadig(false);
    setBlogPopup(true);
  };

  const [state, setState] = React.useState({
    content: "",
  });

  const onChangeState = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={() => router.push("/admin/bloglist")}
          modelheading="Blogs"
          itemicon="sussess"
          modelcontent="Blogs Created Sussessfully"
        />
      )}

      <div className={styles.headingBar}>
        <h2>Create Blog</h2>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.gridLayout}>
            <div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Meta Title</label>
                <input
                  type="text"
                  placeholder="Meta Title"
                  name="mtitle"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Meta description</label>
                <input
                  type="text"
                  placeholder="Meta description"
                  name="mdescription"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Blog Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Category</label>
                <Select 
                  options={options}
                  isMulti
                  components={animatedComponents}
                  onChange={(value) => handleCategory(value)}
                  value={category}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>Blog Content</label>
                {/* Add IRichTextEditor back here if needed */}
                <br />
                {/* <textarea 
                  name="content"
                  className={styles.textarea}
                  required
                  value={state.content}
                  onChange={(e) => onChangeState("content", e.target.value)}
                  style={{
                    height: "200px",
                    resize: "none",
                    width: "100%",
                    border: "1px solid #ccc",
                  }}
                /> */}
                <JoditEditor
                  value={state.content}
                  onChange={(newContent) => onChangeState("content", newContent)}
                   
                  tabIndex={1}  
                  // onBlur={(newContent) => onChangeState("content", newContent)} 
                />
              </div>
            </div>

            <div className={styles.inputWrapper}>
  <h3 className={styles.label}>Banner Image</h3>

  {!previewImage ? (
    <label className={styles.uploadLabel}>
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <span className="mt-2 text-base leading-normal">Upload a Image</span>
      <input
        type="file"
        className="hidden"
        name="featureImage"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </label>
  ) : (
    <div className={styles.previewWrapper}>
      <img src={previewImage} alt="Preview" className={styles.previewImage} />
      <button type="button" onClick={handleRemoveImage} className={styles.removeButton}>
        ❌
      </button>
    </div>
  )}
</div>

          </div>

          {loading ? (
            <button disabled className={styles.button}>Loading..</button>
          ) : (
            <button type="submit" className={styles.button}>Submit</button>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateBlogfname;
