import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center">Not Found </h1>
           <Link href={"/"}> <button className="btn btn-primary">Go To Home</button></Link>
        </div>
    );
};

export default NotFound;