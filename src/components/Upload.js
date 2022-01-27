import React, {useState} from 'react';
import "../styles/upload.scss"
import axios from "axios"

function Upload() {
    const [state, setState] = useState({
        name: "",
        price: "",
        type: "",
        description: ""
    })
    const [url, setUrl] = useState("")
    const { image, name, price, type, description } = state
    const uploadImg = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "ml_default")

        axios.post("https://api.cloudinary.com/v1_1/fullstack-login-register/image/upload", formData)
            .then(res => {
                console.log(res.data.secure_url)
                setUrl(res.data.secure_url)
            })
            .catch(err=>console.log(err))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (url !== "") {
            axios.post("https://productscontroller.herokuapp.com/api/create", {
                    image: url,
                    name: name,
                    price: price,
                    type: type,
                    description: description
            })
                .then(res =>console.log(res))
                .catch(err=> console.log(err))
        }
    }
    return (
        <div className='uploads'>
            <h3>Update Products</h3>
            <span className="base"></span>
            <span>Fill in the form to upddate the products on the dashboard</span>
            <form action="">
                <div className="feild">
                    <div className="image_wrapper">
                        <input className='file' type="file" accept='Image/*' onChange={(e) => setState({ ...state, image: e.target.files[0] })} />
                        <button onClick={(e)=>uploadImg(e)}>upload Image</button>
                    </div>
                </div>
                <div className="feild">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>setState({...state, name:e.target.value})} required />
                </div>
                <div className="feild">
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e)=>setState({...state, price:e.target.value})} required />
                </div>
                <div className="feild">
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e)=>setState({...state, type:e.target.value})} required />
                </div>
                <div className="feild">
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e)=>setState({...state, description:e.target.value})} required />
                </div>
                <button onClick={(e)=>handleSubmit(e)}>UPLOAD DATA</button>
            </form>
        </div>
    );
}

export default Upload;
