/*export default function Form(props){
    // The component must return some JSX
    return <h1>The Form Component</h1>;
  };*/

import { useState } from "react";

  export default function Form(props) {
    console.log(props);
    
    const [formData, setFormData] = useState({searchterm:''})
    const handleChange =(event)=>{
      setFormData({...formData,[event.target.name]:event.target.value})
    }
    const handleSubmit =(event)=>{
      event.preventDefault()
    props.moviesearch(formData.searchterm)
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          
          <input type="text" name="searchterm" value={formData.searchterm} onChange={handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }