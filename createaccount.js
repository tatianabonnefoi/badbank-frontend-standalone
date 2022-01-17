function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
   function validate(field, label){
       if(!field){
           setStatus('Error data incomplete please insert: ' + label);
           setTimeout(() => setStatus(''),3000);
           return false;
       }
       if(label === 'email' && !email.match (mail_format)) {
        setStatus('Error: insert a valid email');
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
       if(label === 'password' && password.length < 5 ) {
        setStatus('Error: password length must be at least 5 characters');
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
    

       return true;
   }


   function handleCreate(){
       console.log(name,email,password);
       if(!validate(name,      'name'))     return;
       if(!validate(email,     'email'))    return;
       if(!validate(password,  'password')) return;
       ctx.users.push({name,email,password,balance:100});
       setShow(false);
   }


   
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
   
   
   
    return (
        <Card
        
        bgcolor= "primary"
        header= "Create Account"
        status={status}
        body={show ? (
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter Name" value= {name} onChange={e => setName(e.currentTarget.value)}/><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value= {email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="input" className="form-control" id="password" placeholder="Enter password" value= {password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
            </>
        ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>  
        )}
 
        />
    )

}