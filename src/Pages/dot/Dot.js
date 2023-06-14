import React, { useEffect, useState } from 'react';

const Dot = () => {

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch("https://desolate-brushlands-62632.herokuapp.com/session")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>dot</h1>
        </div>
    );
};

export default Dot;