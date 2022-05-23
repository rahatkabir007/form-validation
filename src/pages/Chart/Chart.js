import React, { useEffect, useState } from 'react';
import D3 from './D3';
import './Chart.css'


const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30,50]
]
var i = 0;


function Chart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if (i === datas.length) i = 0;
  }


  return (
    <div onClick={changeData}>
      <D3 width={600} height={400} data={data} />
    </div>
  );
}

export default Chart