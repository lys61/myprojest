export const getnews = async()=>{
    const url =`http://news-at.zhihu.com/api/3/stories/latest`
    const response=fetch(url,{method:'get'}).then(res=>res.json())
    return response
}

export const getdate=async()=>{
    const url =`http://news-at.zhihu.com/api/3/stories/latest`
    const response=fetch(url,{method:'get'}).then(res=>res.json())
    return response.date
}

export const getdetial=async({id})=>{
    const url =`https://news-at.zhihu.com/api/3/story/756686,`
    const response=fetch(url,{method:'get'}).then(res=>res.json())
    return response
}
export const getoneday=async(date)=>{
    var url ='https://news-at.zhihu.com/api/3/news/before/'+date
    const response=fetch(url,{method:'get'}).then(res=>res.json())
    return response
  }