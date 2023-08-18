import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <div>
            <h2>Posts View</h2>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <section>
                {posts && posts.map((post) => {
                    return <article>
                        <h5>{post.title}</h5>
                        <h5>{post.body}</h5>
                    </article>
                })}
            </section>
        </div>
    );
};

export default PostsView;