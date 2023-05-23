'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
import PromptCardList from './PromptCardList'


const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('api/prompt');
            const data = await response.json();

            setPosts(data);
        }

        fetchPost();
    }, [])

    const handleSearchChange = (e) => {
        const value = e.target.value;

        setSearchText(value);
    }

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    required
                    type='text'
                    placeholder='Search for a tag of a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    className='search_input peer'
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={() => { }}
            />
        </section>
    )
}

export default Feed