import BlogPosts from "./BlogPosts";
import Data from "../data/blogposts.json";


const CardBlog = () => {
    return (
        <section className="h-[671px] container flex items-center justify-center">
            <BlogPosts blogposts={Data} />
        </section>
    );
}

export default CardBlog;