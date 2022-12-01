import React from 'react'
import fireDb from '../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const Addedit = () => {

    const navigate = useNavigate();
    const [state, setState] = React.useState({
        name: "",
        email: "",
        phone: ""
    })
    const { name, email, phone } = state;
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const SubmitHanlder = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            toast.error("Please provide value in each input field")
        } else {
            fireDb.child("contact").push(state, (error) => {
                if (error) {
                    toast.error(error);
                } else {
                    toast.success("contact added Successfully");
                }
            });
            setTimeout(() => navigate("/"), 500)
        }
    }

    return (
        <div className='container'>
            <div className="form-section">
                <form className='form-group' onSubmit={SubmitHanlder}>
                    <div className="form-control">
                        <label>Name</label>
                        <input type="text" name="name"
                            placeholder='Enter your name' value={name} onChange={onInputChange} />
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="text" name="email"
                            placeholder='Enter your Email' value={email} onChange={onInputChange} />
                    </div>
                    <div className="form-control">
                        <label>Contact</label>
                        <input type="number" name="phone"
                            placeholder='Enter your No.' value={phone} onChange={onInputChange} />
                    </div>
                    <button type='submit' className='btn btn-primary save-button' >Save</button>
                </form>
            </div>
        </div>
    )
}

export default Addedit
