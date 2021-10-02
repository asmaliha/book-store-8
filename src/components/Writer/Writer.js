import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Writer.css'

const Writer = () => {

    const [writers, setWriters] = useState([]);

    useEffect(() => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setWriters(data));
    }, [])

    return (
        <div className="writers">
            {writers.map(writers => <Details writers={writers}></Details>)}
            <div>
                <p>Total Price:</p>
                <p>Books Ordered</p>
            </div>
        </div>
    );
};

export default Writer;