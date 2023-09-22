import React, {useState} from 'react';

const Problem1 = () => {

    const [all, setAll] = useState([])
    const [show, setShow] = useState([]);
    

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');


    const handleClick = (val) => {
        if (val === 'all') {
            setShow([...all])
        }
        else {
            const filter = all.filter(item => item.status === val)
            setShow([...filter]);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = { name: name, status: status.toLowerCase() }
        setShow([...show, data]);
        setAll([...show, data]);
        //console.log(data)
        e.target.reset();
    }

    //console.log(show)
    
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input onChange={(e)=>setStatus(e.target.value)} type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                show?.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{ item.name}</td>
                                        <td>{ item.status}</td>
                                    </tr>
                                })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;