import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

function Price() {
  const [data, setData] = useState({
    loading: true,
    tables: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pricedetails.onrender.com/scrape-table");
        console.log(response.data.tables);

        if (response.data.tables && response.data.tables.length > 0) {
          setData({
            loading: false,
            tables: response.data.tables,
            error: null,
          });
        } else {
          setData({
            loading: false,
            tables: [],
            error: "No data available",
          });
        }
      } catch (error) {
        setData({
          loading: false,
          tables: [],
          error: error.message,
        });
      }
    };

    fetchData();
  }, []);

  if (data.loading) return <div className="text-center mt-5">Loading...</div>;
  if (data.error) return <div className="text-center mt-5 text-red-500">Error: {data.error}</div>;

  return (
    <section id='price' className='pt-20  mx-4'>

    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4 text-center">Price Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border outline border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Variety</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Price Today</th>
            </tr>
          </thead>
          <tbody>
            {data.tables.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition">
                <td className="px-4 py-2 border text-center">{item.Variety || "N/A"}</td>
                <td className="px-4 py-2 border text-center">{item.Quantity || "N/A"}</td>
                <td className="px-4 py-2 border text-center">{item["Price Today"] || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
  );
}

export default Price;
