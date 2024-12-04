import React,{useState,useEffect} from 'react'
import AdminNavbar from '../../component/AdminNavbar';

const ReservationAdmin = () => {
    const [datas, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const response = await fetch(`/api/getallres`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log(result);
                    setData(result)

                } else {
                    setError('Error fetching decoration data. Please check your backend.');
                }
            } catch (error) {
                setError('An error occurred while fetching the data.');
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="text-slate-200 bg-black h-screen w-full  flex" >
                <AdminNavbar />
          
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {error && (
                    <div className="text-red-500 text-center p-4">
                        {error}
                    </div>
                )}
                <table className="w-[1300px] text-sm text-left text-gray-500 mt-[100px] ml-[200px]">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                        <th className="px-6 py-3">First Name</th>
                            <th className="px-6 py-3">Last Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Phone No</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Time</th>
                            <th className="px-6 py-3">Guest No</th>
                            <th className="px-6 py-3">Message</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {datas.length > 0 ? (
                            datas.map((data, index) => (
                                <tr key={index} className="bg-white border hover:bg-gray-50">
                                     <td className="px-6 py-4">{data.firstname}</td>
                                    <td className="px-6 py-4">{data.lastname}</td>
                                    <td className="px-6 py-4">{data.email}</td>
                                    <td className="px-6 py-4">{data.contact}</td>
                                    <td className="px-6 py-4">{data.date}</td>
                                    <td className="px-6 py-4">{data.time}</td>
                                    <td className="px-6 py-4">{data.guestno}</td>
                                    <td className="px-6 py-4">{data.message}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                    No data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    );
}

export default ReservationAdmin
