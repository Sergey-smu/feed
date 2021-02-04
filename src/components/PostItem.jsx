import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UIComponent/Button';

const PostItem = ( { post, remove } ) => {
    const navigate = useNavigate ()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => navigate(`/posts/${post.id}`)}>
                    Открыть
                </Button>
                <Button onClick={() => remove(post)}>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default PostItem;
