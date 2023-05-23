'use client'

import { useState } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {

    return (
        <div className='mt-16 prompt_layout'>
            {
                data && data.map(post => (
                    <PromptCard
                        key={post._id}
                        post={post}
                    />
                ))
            }
        </div>
    )
}

export default PromptCardList