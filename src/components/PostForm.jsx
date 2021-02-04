import React, {useState} from 'react';
import Button from '../UIComponent/Button';
import Input from '../UIComponent/Input';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <Input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
                id='createPostTitle'
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <Input
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
                id='createPostBody'

            />
            <Button onClick={addNewPost}>Создать пост</Button>
        </form>
    );
};

export default PostForm;
