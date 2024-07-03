import { useState } from "react";

const {log} = console

const Form = () => {
    const [ formData, setFormData ] = useState({firstname:'', lastname:'', email:'', comments:'', isFriendly:true , employment:'', favColor:''})
    const handleDataChange = (event) =>{
        setFormData(prevFormData => {
            const {name, value , checked, type} = event.target
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
 
    const style = {
        display:'grid',
        // flexDirection: 'column',
        gap:'10px',
        padding:'10px'
    }
    const btnStyle = {
        padding:'10px',
        borderRadius:'7px',
        backgroundColor:'#000',
        color:'#fff'
    }
    const getFormData = (e) =>{
        e.preventDefault()
        log(formData)
    }
    const selectStyle = {
        width:'110px'
    }
  return (
    <form action="" className="documentForm" style={style}>
        <input type="text" className="firstname" placeholder="firstname"  name='firstname' onChange={handleDataChange} value={formData.firstname}/>
        <input type="text" className="lastname" placeholder="lastname"  name='lastname' onChange={handleDataChange} value={formData.lastname}/>
        <input type="email" className="email" placeholder="email"  name='email' onChange={handleDataChange} value={formData.email}/>
        <textarea className="textarea" name="comments" placeholder="add your comments here" value={formData.comments} onChange={handleDataChange}/>
       <div>
       <input type="checkbox" id="isFriendly" name="isFriendly" checked={formData.isFriendly} onChange={handleDataChange}/>
       <label htmlFor="isFriendly">Are you Friendly?</label>
       </div>
        <br />

        <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name='employment'
                    value='unemployed'
                    checked={formData.employment === 'unemployed'}
                    onChange={handleDataChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name='employment'
                    value='part-time'
                    checked={formData.employment === 'part-time'}
                    onChange={handleDataChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name='employment'
                    value='full-time'
                    checked={formData.employment === 'full-time'}
                    onChange={handleDataChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favourite color?</label>
            <select name="favColor" value={formData.favColor} id="favColor" style={selectStyle} onChange={handleDataChange}>
                <option value="">--Choose--</option>
                <option value="Red">Red</option>
                <option value="Orange">Orange</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Indigo">Indigo</option>
                <option value="Violet">Violet</option>
            </select>
      <button style={btnStyle} onClick={getFormData}>submit</button>
    </form>
  );
};

export default Form;
