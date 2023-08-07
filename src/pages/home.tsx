import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
    return (
        <div className="bg-dark p-4 w-[100%] min-h-screen">
            HomePage
            <Link href='/register' className="p-4 rounded-md bg-primaryhv text-text">Register</Link>
        </div>
    )
}

export default HomePage;