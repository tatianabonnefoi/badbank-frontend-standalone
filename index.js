function Spa() {
    return (
      <HashRouter>
        <div>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>  
          <Routes>            
            <Route path="/" element ={<Home/>} />
            <Route path="/CreateAccount/" element ={<CreateAccount/>}/>
            <Route path="/login/" element ={<Userlogin/>}/>
            <Route path="/deposit/" element ={<Deposit/>}/>
            <Route path="/withdraw/" element ={<Withdraw/>}/>
            <Route path="/alldata/" element ={<AllData/>}/>
          </Routes>
        </UserContext.Provider>  
        </div>    
      </HashRouter>
    );
  }
  
  ReactDOM.render(
     <Spa/>,
    document.getElementById('root')
  );
  