import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

import './Main.css'


export default function Main({search}) {


   const [data, setData] = useState([]);
   const [selectedPost, setSelectedPost] = useState(null); 



    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
                const result = await res.json();
                setData(result);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  


  return (
    <main>
      <div className="container">
          {
            filteredData.map((elem, index) => (
              <div className="item" key={index} onClick={() => setSelectedPost(elem)}>
                <img src={elem.img} srcSet={`${elem.img_2x} 2x`} alt="" />
                <span>{elem.tags}</span>
                <h3>{elem.title}</h3>
                <p className="data"><span>{elem.autor}</span> · April 8, 2018 · 3K Views</p>
                <p className='text'>{elem.text}</p>
              </div>
            ))
          }
        
      </div>
      {selectedPost && (
        <div className="popupOverlay" onClick={() => setSelectedPost(null)}>
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()} 
          >
            <img src={selectedPost.img} srcSet={`${selectedPost.img_2x} 2x`} alt="" />
              <span>{selectedPost.tags}</span>

            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.text}</p>

            <span onClick={() => setSelectedPost(null)} className='close'>
              <IoClose />
            </span>
          </div>
        </div>
      )}
    </main>
  )
}
