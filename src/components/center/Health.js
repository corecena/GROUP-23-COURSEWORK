import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import './centerbar.css'
import NewsItem from '../NewsItem'
 
const Education = () => {
    const [articles, setArticles] = useState([]);
  
     var options = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: 'latest Health AND  Diseases in Africa AND Europe OR uganda', lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': '9yOKaqW8-00kyjkeXG6O69TfQhPE-ClWll5yeHgyia8'
  }}
     const getArticles = async () =>{
        try{
        const response = await axios.request(options);
      
        setArticles(response.data.articles)
        }
        catch(error){
          console.log('errror while loading the page')
        }
      }

    useEffect(() =>{
    
      getArticles()
      

     }, []) 
     return (
    <div className='cardContainer'>
      {articles.map(articles => {
return (
  <>
  
  <NewsItem key={articles.id}
  title={articles.title}
  description={articles.excerpt}
  url={ articles.link}
  urlToImage={ articles.media }
 
  />
  
   </>
)

})}
      
      </div>
  )
}


export default Education