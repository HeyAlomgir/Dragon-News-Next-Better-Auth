import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsCategoriId } from "@/lib/data";

const CategroyNewsPage = async({params}) => {
    const {id}=await params ;
    console.log(id);


     const categories = await getCategories();
  // console.log(categories);

  const news = await getNewsCategoriId(id);
  console.log(news);


    return (
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
    

     <div className=" col-span-1 md:col-span-3">
      <LeftSidebar categories={categories} activeId={id} ></LeftSidebar>
     </div>


     <div className=" col-span-1 md:col-span-6">

        <h1 className="font-bold text-lg">News by Category</h1>

       {
        news.length > 0 ? (
             news.map(n => {
            return <NewsCard key={n._id} news={n}></NewsCard>
        } )
        ):<h2 className="flex items-center justify-center text-4xl font-bold text-center my-20">No news found!</h2>
       }
     </div>


     <div className=" col-span-1 md:col-span-3">
      <h1 className="font-bold text-lg">Login With</h1>
       <RightSidebar></RightSidebar>
     </div>
  
   </div>
    );
};

export default CategroyNewsPage;