import React, { useEffect, useState } from 'react';
import BoxCard from '../Components/BoxCard';
import SearchBar from '../Components/SearchBar';

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
  const [data,setData] = useState(data1)
  
  
  useEffect(()=>{
    var filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  },[searchTerm])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Catalogue</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <BoxCard 
          key={index}
          name={item.title}
          content={item.description}
          image={item.thumbnail}
          date={item.date}
          likes={item.like}
          comments={item.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
