import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Problem2 = () => {

    const [allContacts, setAllContacts] = useState([]);
    const [usContacts, setUsContacts] = useState([])

    const [evenStatus, setEvenStatus] = useState(false);
    const [evenContacts, setEvenContacts] = useState([]);


    const fetchContacts = async () => {
        const response = await fetch('https://contact.mediusware.com/api/contacts/')
        const data = await response.json();
        const results = data.results;
        //console.log(results);
        setAllContacts(results)
    }
    const fetchUSContacts = async () => {
        const response = await fetch('https://contact.mediusware.com/api/country-contacts/United States/')
        const data = await response.json();
        const results = data.results;
        //console.log(results);
        setUsContacts(results)
    }

    useEffect(() => {
        fetchContacts();
        fetchUSContacts();
    }, [])

    const handleEven = (b) => {
        if (b) {
            
        }
        else {
            
        }
    }

    console.log(allContacts);
    console.log(usContacts);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <span>
                        <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >All Contacts</button>

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Modal A</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className='pb-4'>
                                            <button type="button" className="btn btn-outline-primary mx-2" >All Contacts</button>
                                            <button type="button" className="btn btn-outline-info mx-2" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">US Contacts</button>
                                            <button type="button" className="btn btn-outline-secondary mx-2" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        <div>
                                            <table className="table table-striped ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Phone</th>
                                                        <th scope="col">Country</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allContacts?.map((item, index) => {

                                                            return <tr className='cursor-pointer' key={index} data-bs-toggle="modal" data-bs-target={`#staticBackdropX${index}`} >
                                                                <td>{item.id}</td>
                                                                <td>{item.phone}</td>
                                                                <td>{item.country.name}</td>
                                                                <span>
                                                                    <div className="modal "
                                                                        id={`staticBackdropX${index}`} data-bs-backdrop="static"
                                                                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                        <div className="modal-dialog ">
                                                                            <div className="modal-content border border-danger">
                                                                                <div className="modal-header">
                                                                                    <h5 className="modal-title" id="staticBackdropLabel">Modal C</h5>
                                                                                    <button type="button"
                                                                                        className="btn-close" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>
                                                                                </div>
                                                                                <div className="modal-body">
                                                                                    <table className="table table-striped ">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th scope="col">Id</th>
                                                                                                <th scope="col">Phone</th>
                                                                                                <th scope="col">Country Id</th>
                                                                                                <th scope="col">Country</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>


                                                                                            <tr>
                                                                                                <td>{item.id}</td>
                                                                                                <td>{item.phone}</td>
                                                                                                <td>{item.country.id}</td>
                                                                                                <td>{item.country.name}</td>
                                                                                            </tr>

                                                                                        </tbody>

                                                                                    </table>
                                                                                </div>
                                                                                <div className="modal-footer">
                                                                                    <button type="button"
                                                                                        className="btn btn-secondary" data-bs-dismiss="modal"
                                                                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                                                    >Close</button>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-start">
                                        <span className=' '>
                                            <input onChange={()=>handleEven(!evenContacts)} type='checkbox' /><label className='ps-2'>Even Only</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </span>

                    <span>
                        <button className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" >US Contacts</button>
                        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Modal B</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className='pb-4'>
                                            <button type="button" className="btn btn-outline-primary mx-2" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">All Contacts</button>
                                            <button type="button" className="btn btn-outline-info mx-2">US Contacts</button>
                                            <button type="button" className="btn btn-outline-secondary mx-2" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        <div>
                                            <table className="table table-striped ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Phone</th>
                                                        <th scope="col">Country</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        usContacts?.map((item, index) => {

                                                            return <tr className='cursor-pointer' key={index} data-bs-toggle="modal" data-bs-target={`#staticBackdropY${index}`}>
                                                                <td>{item.id}</td>
                                                                <td>{item.phone}</td>
                                                                <td>{item.country.name}</td>
                                                                <span>
                                                                    <div className="modal fade"
                                                                        id={`staticBackdropY${index}`} data-bs-backdrop="static"
                                                                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <h5 className="modal-title" id="staticBackdropLabel">Modal C</h5>
                                                                                    <button type="button"
                                                                                        className="btn-close" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"></button>
                                                                                </div>
                                                                                <div className="modal-body">
                                                                                    <table className="table table-striped ">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th scope="col">Id</th>
                                                                                                <th scope="col">Phone</th>
                                                                                                <th scope="col">Country Id</th>
                                                                                                <th scope="col">Country</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>


                                                                                            <tr>
                                                                                                <td>{item.id}</td>
                                                                                                <td>{item.phone}</td>
                                                                                                <td>{item.country.id}</td>
                                                                                                <td>{item.country.name}</td>
                                                                                            </tr>

                                                                                        </tbody>

                                                                                    </table>
                                                                                </div>
                                                                                <div className="modal-footer">
                                                                                    <button type="button"
                                                                                        className="btn btn-secondary" data-bs-dismiss="modal"
                                                                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop2"
                                                                                    >Close</button>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </span>

                </div>

            </div>
        </div>
    );
};

export default Problem2;