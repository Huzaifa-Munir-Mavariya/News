import React, {  useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page,setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0); 
    //document.title = `${props.category} - NewsMonkey`
    
// defaultProps = {
//         country:"us",
//         pageSize:9,
//         category:"general"
//     }

// articles = [
    
//   ];

//   constructor(){
//     super(props)

//   }

  const updateNews = async () => {
    props.setProgress(10);
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ebd35b6c9fe4d4390e67df1294245a0&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
  },[])



const fetchMoreData = async () => {
    
    //document.title = `${props.category} - NewsMonkey`
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ebd35b6c9fe4d4390e67df1294245a0&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
}
    return (
      <div className='container my-3 col-md-9'>
        <center style={{marginTop: "80px"}}><h2>NewsMonkey - Top {props.category} Headlines</h2></center>
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}>

            <div className="container">

            

        <div className="row">
        {articles.map((element)=>{
            if(element.title !== "[Removed]"){
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title != null ? element.title.slice(0,45): "title not found"} description={element.description == null ? "Description not found": element.description.slice(0,85)} imageUrl={element.urlToImage} author={element.author != null ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} newsUrl={element.url}/>
                </div>
            }
       })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
}

export default News