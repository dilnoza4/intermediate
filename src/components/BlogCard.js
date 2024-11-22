import React from 'react';

// BlogCard Component
const BlogCard = ({ title, description, imageUrl }) => {
    return (
        <div style={blogCardStyle}>
            <img src={imageUrl} alt={title} style={imageStyle} />
            <div style={textContentStyle}>
                <h3 style={titleStyle}>{title}</h3>
                <p style={descriptionStyle}>{description}</p>
            </div>
        </div>
    );
};

// BlockCard Component
const BlockCard = ({ title, content, imageUrl }) => {
    return (
        <div style={blockCardStyle}>
            <img src={imageUrl} alt={title} style={imageStyleBlock} />
            <div style={textContentStyleBlock}>
                <h3 style={titleStyleBlock}>{title}</h3>
                <p style={contentStyle}>{content}</p>
            </div>
        </div>
    );
};

// BlogCard Styles
const blogCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '300px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '15px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    backgroundColor: '#fff',
};

const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
};

const textContentStyle = {
    padding: '15px',
};

const titleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
};

const descriptionStyle = {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
    marginBottom: '15px',
};

// BlockCard Styles
const blockCardStyle = {
    border: '1px solid #f4b400',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '300px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '15px',
    backgroundColor: '#fff5d9',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const imageStyleBlock = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
};

const textContentStyleBlock = {
    padding: '15px',
};

const titleStyleBlock = {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#2c3e50',
};

const contentStyle = {
    fontSize: '14px',
    color: '#7f8c8d',
    lineHeight: '1.5',
};

// Main App Component
const App = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BlogCard
                title="What Dumbledore Likes"
                description="Albus Dumbledore, one of the most powerful wizards in history, has some fascinating likes and hobbies. From his love for sweets like lemon drops to his preference for reading, there's much to discover about this enigmatic wizard!"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSowJWTPNRqaqPOqvcBdOVzYv7iVJ0w-j-2hwcybeMRepMN45iMySdS8IoDnOcSKag&usqp=CAU"
            />
            <BlogCard
                title="Dumbledore's Favorite Treats"
                description="Dumbledore is known for his fondness for lemon drops, but what other treats did he enjoy? Dive into the sweet world of this wizard’s favorite snacks!"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c0PJpYuFChPUBIWD5nkoZWCVypCA80D3Bw&s"
            />

            <BlockCard
                title="Dumbledore's Wisdom"
                content="Dumbledore shared timeless wisdom, teaching lessons of love, bravery, and sacrifice. His quotes are deeply inspiring, making him one of the most respected characters in literature."
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKD2qnusSoD-VK6GvCpBD7fAfL9HXQJCGpw&s"
            />
            <BlockCard
                title="The Magic of Hogwarts"
                content="Hogwarts School of Witchcraft and Wizardry is a place where magic comes alive. With its enchanted halls, secret passages, and magical creatures, Hogwarts continues to captivate generations of readers."
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-A8Cn8951tJK3CkcavCJol95l-H3AqMDiew&s"
            />
        </div>
    );
};

export default App;
