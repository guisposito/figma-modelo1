const BlogPosts = ({blogposts}) => {
    return (
        <div className="card-post">
             {blogposts.map(post => (
                <div className="font-josefins text-ft-grey-100 w-[300px] relative " key={post.title}>
                    <a href="#">
                        <img className="rounded" src={"../img/products/" + post.img} alt={post.alt} width="300" height="383" />
                    </a>
                    
                </div>
            ))}
        </div>
    );
}

export default BlogPosts;