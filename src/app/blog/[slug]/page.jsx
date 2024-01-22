
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
const SinglePostPage = () => {
  return (
  
    <div className={styles.container}>
       <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-the-view-from-the-top-of-a-building-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            fill
            className={styles.img}
         />
       </div>
       <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
             <div className={styles.detailText}>
               <span className={styles.detailTitle}>Published</span>
               <span className={styles.detailValue}>01.01.2024</span>
            </div>
           </div>
        <div className={styles.content}>Desciption lonngggggggggggggggggggggggg</div>
      </div>
   </div>
  );
}

export default SinglePostPage;
