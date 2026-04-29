import Image from "next/image";
import Link from "next/link";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";


const NewsCard = ({news}) => {
    return (
        <div className="card bg-base-100  shadow-sm my-10">
            <div className="card-body ">

                
                <div className="flex justify-between items-center bg-slate-100 w-full p-2 rounded-md shadow">
                    <div className="flex gap-2 items-center">
                        <Image src={news.author?.img} width={40} height={40} alt="img" className="rounded-full shadow-xl " ></Image>
                        <div>
                            <p className="text-xl font-bold" >{news.author?.name}</p>
                            <p className="text-gray-600" >{news.author?.published_date}</p>
                            
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoBookmarks />
                        <FaShareAlt />
                    </div>
                </div>
                <p className="font-bold">{news.title}</p>
            <figure>
               <Image src={news.thumbnail_url} width={400} height={400} alt="img" className="w-full"></Image>
            </figure>
            <p className="line-clamp-3 text-gray-600">{news.details}</p>


                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <h2 className="flex items-center gap-1"><FaStar className="text-xl text-yellow-500" />{news.rating.number}</h2>
                        <h2 className="flex items-center gap-1"><FaEye className="text-xl"/>{news.total_view}</h2>
                    </div>
                    <div>
                        <Link href={`/news/${news._id}`}>
                         <button className="btn">See Details</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;