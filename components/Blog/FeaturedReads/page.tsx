"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { decode } from "html-entities";

interface Category {
  originalName: string;
  displayName: ReactNode;
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
    "wp:term"?: any[];
  };
}

const FeaturedReads = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch categories
useEffect(() => {
  axios
    .get("https://blogs.synexc.com/wp-json/wp/v2/categories?per_page=100&hide_empty=true")
    .then((res) => {
      const cleanCats = res.data
        .filter((cat: Category) => cat.name.toLowerCase() !== "uncategorized")
        .map((cat: Category) => ({
          id: cat.id,
          originalName: cat.name,      // keep original
          displayName: decode(cat.name), // show decoded
        }));

      setCategories(cleanCats);

      if (cleanCats.length > 0) {
        setActiveTab(cleanCats[0].originalName); // set by original name
      }
    })
    .catch((err) => console.error(err));
}, []);

  // Fetch posts
  useEffect(() => {
    axios
      .get("https://blogs.synexc.com/wp-json/wp/v2/posts?_embed&per_page=100")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filter posts by active category
  const filteredPosts = posts.filter((post) => {
    const categoriesList = post._embedded?.["wp:term"]?.[0];
    if (!categoriesList) return false;
    return categoriesList.some((cat: any) => cat.name === activeTab);
  });

  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <div className={Style.row}>
          <h2>Featured Reads</h2>
          <div className={Style.bloglist}>
            {/* Dynamic Tabs */}
            <ul className={Style.tabws}>
  {categories.map((cat) => (
    <button
      key={cat.id}
      className={activeTab === cat.originalName ? Style.active : Style.inactive}
      onClick={() => setActiveTab(cat.originalName)} // use original for filter
    >
      {cat.displayName} {/* show decoded */}
    </button>
  ))}
</ul>

            {/* Posts */}
            <div className={Style.blogbox}>
              {filteredPosts.map((post) => (
                <SmallCard
                  key={post.id}
                  image={post}
                  title={post.title.rendered}
                  description={post.content.rendered}
                  readmore={post.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReads;

interface SmallCardProp {
  image?: any;
  title?: string;
  description?: string;
  readmore?: string;
}

const SmallCard = ({ image, title, description, readmore }: SmallCardProp) => {
  const [cleanedText, setCleanedText] = useState("");

  useEffect(() => {
    const noTags = description?.replace(/<[^>]+>/g, "");
    const decoded = decode(noTags || "");
    setCleanedText(decoded);
  }, [description]);

  return (
    <div className={Style.blogcard}>
      <div className={Style.image}>
        {image._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <Image
            src={image._embedded["wp:featuredmedia"][0].source_url}
            alt={title || ""}
            width={400}
            height={220}
          />
        )}
      </div>
      <div className={Style.contentbox}>
        <h3>{title}</h3>
        <p>{cleanedText}</p>
        <Link href={readmore || "#"} target="_blank" rel="noopener noreferrer">
          Read More
        </Link>
      </div>
    </div>
  );
};
