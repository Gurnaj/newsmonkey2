import React, { useState, useEffect, useLayoutEffect } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    let [articles, setArticles] = useState([]);
    let [loading, setLoading] = useState(true);
    let [page, setPage] = useState(1);
    let [totalResults, setTotalResults] = useState(0);

    document.title = props.category === 'general' ? document.title : `NewsMonkey - ${(props.category).toUpperCase()}`;


    const updateNews = async () => {
        props.updateProgress(10);
        await setLoading(true)
        await setPage(page + 1)

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        let p = await fetch(url);

        await props.updateProgress(30);
        let response = await p.json()
        await props.updateProgress(50);

        setArticles(response.articles);
        setTotalResults(response.totalResults);
        setLoading(false);

        props.updateProgress(100);
    }

    useEffect(()=>{         // This will work as componentDidMount()
        updateNews();
    }, [])                  // Main koi input ko listen nahi kr raha

    // const handleNextClick = async() => {
    //     await setPage(page+1)
    //     updateNews();
    // }

    // const handlePrevClick = async() => {
    //     await setPage(page-1)
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        await setPage(page + 1)

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        let p = await fetch(url);

        let response = await p.json();
        setArticles((articles).concat(response.articles))
    }


        return (
            <>
                <div className="container my-4" id="top">
                    <h1 className="my-4 text-center">NewsMonkey - Top {props.category === 'general' ? "" : (props.category).charAt(0).toUpperCase() + (props.category).slice(1, props.category.length)} Headlines</h1>
                    <div className="container d-flex justify-content-center my-3 p-2 rounded-pill bg-dark" style={{flexWrap:'wrap', position:'sticky', top:'0px', zIndex:'10', opacity:'0.92'}}>
                        <Link className="btn btn-primary btn-lg btn-sm border-pill mx-2 rounded-pill my-1" role="button" to="/business">Business</Link>
                        <Link className="btn btn-primary btn-lg btn-sm border-pill mx-2 rounded-pill my-1" role="button" to="/entertainment">Entertainment</Link>
                        <Link className="btn btn-primary btn-lg btn-sm border-pill mx-2 rounded-pill my-1" role="button" to="/health">Health</Link>
                        <Link className="btn btn-primary btn-lg btn-sm border-pill mx-2 rounded-pill my-1" role="button" to="/science">Science</Link>
                        <Link className="btn btn-primary btn-lg btn-sm border-pill mx-2 rounded-pill my-1" role="button" to="/sports">Sports</Link>
                        <Link className="btn btn-primary btn-lg btn-sm border-pill mx-2 rounded-pill my-1" role="button" to="/technology">Technology</Link>
                    </div>
                    <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />}>
                        {loading ? <Loading /> :
                            <div className="container">
                                <div className="row" style={{ alignItems: 'center' }}>
                                    {articles.map((elem) => {
                                        return <div className="col-md-4 my-3" key={elem.url}>
                                            <NewsItem author={elem.author} url={elem.url} source={elem.source.name} date={elem.publishedAt} title={elem.title.slice(0, 45)} description={elem.description && elem.description.slice(0, 88)} imgUrl={elem.urlToImage} newsUrl={elem.url} />
                                        </div>
                                    })}
                                </div>
                            </div>
                        }
                    </InfiniteScroll>
                </div>
                <div className="container d-flex justify-content-between my-5">
                    {articles.length === totalResults &&
                    
                    <button type="button" className="btn btn-secondary rounded-pill"><a href="#top" className="text-light"><i className="fa-solid fa-arrow-up"></i></a></button>
                    }                   
                </div>
            </>
        )
}
{/* <button type="button" className={`btn btn-secondary ${page === 1 ? 'invisible' : 'visible'}`} onClick={handlePrevClick}>&larr; Previous</button> */}
{/* <button type="button" id="next-btn" className={`btn btn-secondary ${page >= Math.ceil(totalResults / props.pageSize) ? 'invisible' : 'visible'}`} onClick={handleNextClick}>Next &rarr;</button> */}
News.defaultProps = {
    pageSize: 9,
    country: 'in'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    apiKey: PropTypes.string,
}