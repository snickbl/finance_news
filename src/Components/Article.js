import React from 'react';
import './Article.css'
import { Link } from 'react-router-dom';

const Article = ({element}) => {

    return (
        <>

            <div className="smallCard" id="1">
                <div className='image'>
                        <img src={element.photo} width='170px' height='100px' alt='article_picture'/>
                </div>
                <h3 className="articleHeader">{element.title}</h3>
            
                <div className='databutton'>
                    <Link to={`news/${element.id}`}><button className='button' id={element.id}>Show more</button></Link>
                    <div className="date">{element.date}</div>
                </div>
                
            </div>
        </>
        
    );
};

export default Article;