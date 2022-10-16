import { useState } from "react"
const Form = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Message, setMessage] = useState('')
   
    


    const Bind = (event) => {
        event.preventDefault();
        props.myFunction({name,email,Message})
   
    }

    return(
        <div class="col-md-12">
            <row>
            <div class="col-md-6">
            <form action="/action_page.php" onSubmit={Bind}>
  <div class="form-group">
    <label for="email">Name:</label>
    <input type="text" class="form-control" id="email" value={name} onChange={(event) => setName(event.target.value)}/>
  </div>
  <div class="form-group">
    <label for="pwd">Email:</label>
    <input type="email" class="form-control" id="pwd" value={email} onChange={(event) => setEmail(event.target.value)}/>
  </div>
  <div class="form-group">
    <label for="pwd">Message:</label>
    <input type="text" class="form-control" id="pwd"  value={Message} onChange={(event) => setMessage(event.target.value)}/>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
</div>

</row>
        </div>
    
    )
}

export default Form