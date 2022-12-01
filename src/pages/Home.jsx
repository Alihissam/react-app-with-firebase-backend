import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { Link } from 'react-router-dom'


const Home = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        fireDb.child("contact").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        })
        return () => {
            setData({})
        };
    }, [])


    return (
        <div className='container'>
            <h2>Home</h2>
            <table className='table-container shadow'>
                <thead className='table-header'>
                    <tr className='tr-section'>
                        <th style={{ textAlign: "center", paddingLeft: "20px" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Email</th>
                        <th style={{ textAlign: "center" }}>Contact</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody className='t-body-section'>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={id} className="body-section">
                                <th scope="row">{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].phone}</td>
                                {/* <td className='button-container'>
                                    <Link to={`/view/${id}`}>
                                        <button className='btn btn-primary all-button'>View</button>
                                    </Link>
                                    <Link to={`/update/${id}`}>
                                        <button className='btn btn-success all-button'>Edit</button>
                                    </Link>
                                    <button className='btn btn-danger all-button'>Delete</button>
                                </td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
