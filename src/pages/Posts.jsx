import React, {useEffect, useRef, useState} from 'react';
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import Button from '../UIComponent/Button';
import Loader from '../UIComponent/Loader/Loader';
import Select from '../UIComponent/Select';
import Modal from '../UIComponent/Modal';


function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

  

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }
    
    
    return (
        <div className="App">
            <Button  onClick={() => setModal(true)}>
                Создать пост
            </Button>
           
            <Modal isOpen={modal} onCancel={()=>setModal(false)}>
                <PostForm create={createPost}/>
            </Modal>
            <hr/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Select
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Показать все'},
                ]}
            />
            {postError &&
            <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Лента постов"/>
            {isPostsLoading && <Loader />        }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
