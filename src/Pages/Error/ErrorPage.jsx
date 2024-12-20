import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    useEffect(() => {
        document.title = "Error";
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white px-4">
            <div className="text-center">
                <iframe src="https://giphy.com/embed/C21GGDOpKT6Z4VuXyn" 
                    width="100%" height="auto" 
                    className="max-w-full h-auto md:max-w-[480px] md:h-[280px]">
                </iframe>
                
                <Link to='/'>
                    <button className='w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#0334c8] via-[#023d84] to-[#07881c] hover:from-[#4d8823] hover:via-[#113e48] transition duration-300 hover:to-[#228B22] ease-in-out btn border-none rounded-md'>Back To ProjectName
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;