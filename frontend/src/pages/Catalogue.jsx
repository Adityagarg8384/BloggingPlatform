import React, { useEffect, useState } from 'react';
import BoxCard from '../Components/BoxCard';
import SearchBar from '../Components/SearchBar';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import { Link } from 'react-router-dom'; 
import SkeletonCat from '../Components/SkeletonCat';
const data1 = [
  {
    title: 'Item 1',
    description: 'This is a description for item 1.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 2',
    description: 'This is a description for item 2.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Item 3',
    description: 'This is a description for item 3.',
    image: 'https://via.placeholder.com/150'
  }
];

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data,setData] = useState(null)
  const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL
  useEffect(() => {
      fetch(`${SERVER_URL}/getallblog`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.data)
        setData(data.data);
      })
      .catch(error =>{
        console.error('Error fetching data:', error);
      })    
  }, []);
  useEffect(()=>{
    var filteredData = data?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  },[searchTerm])

  return (
    <div className="container mx-auto p-4 w-full">
      <ResponsiveAppBar/>
      <h1 className="text-3xl font-bold mb-4">Catalogue</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {
          data ? data.map((item,ind) => {
            // console.log(item);
            return(
              <Link to={`/blog/${item._id}`}>
                <BoxCard 
                  key={item._id}
                  name={item.title}
                  content={item.subtitle}
                  image={item.thumbnail}
                  date={item.date}
                  likes={item.like}
                  comments={item.comments}
                  username = {item.username}
                />
              </Link>
            )
          })
          : 
          <SkeletonCat/>
        }
      </div>
    </div>
  );
};

export default Catalogue;
