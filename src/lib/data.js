
export const getCategories=async()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data =await res.json();
  return data.data.news_category;
}
export const getNewsCategoriId=async(categori_id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categori_id}`);
  const data =await res.json();
  return data.data;
}



export const getNewsDetaislId=async(news_id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
  const data =await res.json();
  return data.data[0];
}
