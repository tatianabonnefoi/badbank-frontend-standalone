function Deposit(){
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext); 
    const [balance, setBalance] =  React.useState(ctx.users[ctx.users.length -1].balance);
    const [button, setButton]     = React.useState(true);


// ----------- Currency  + Integer -----
    const f = new Intl.NumberFormat( 
            {
                style: 'currency',
                currency: 'USD',
            });
    const balanceMoneda = f.format(balance);


// -----alerts, with sweet alerts! ------
    function ConfirmacionDeposito() {
        // console.log("el valor de deposit es: " + deposit);
        
        // formato moneda en la alerta delmonto a depositar
        const f = new Intl.NumberFormat(
           
                {
                    style: 'currency',
                    currency: 'USD',
                minimunFractionDigits: 1,
                });
        const currency = f.format(deposit);

            Swal.fire({
            title: 'Deposit',
            text: "Confirm deposit amount: " + currency,
            showCancelButton: true,
            cancelButtonText: 'Change',
            showDenyButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const NewBalance = Number(balance); 
                setBalance(NewBalance + deposit);
                setDeposit('');
                setButton(true);

                Swal.fire(
                    {   title: 'Succesful Deposit',
                    }
                );

            } else if (result.isDenied) {
            Swal.fire('Cancel Transaction', '', 'info');
            setDeposit('');
            setButton(true);
            }
        });
    };

    
// ----habilitacion o deshabilitación de boton "Deposit"-----
    function HandleDeposit (e){
        if(e.currentTarget.value <= 0){
            setDeposit('');
            setButton(true)
        } else {
            setDeposit(Number(e.currentTarget.value));
            setButton(false) 
        };
    };


return(
        <Card
        bgcolor="success"
        header="Deposit"
        

        body={(  
            <>
            <h3>Balance : {balanceMoneda}</h3>
            {/* <h1>{JSON.stringify(ctx)}</h1> */}

            <div>Deposit Amount</div>

            <input type="number" className="form-control" id="deposit" placeholder="$ Depoosit Amount" value={deposit}  onChange={HandleDeposit}/> 
            <br/>

            <button type="submit" className="btn btn-light" onClick={ConfirmacionDeposito} disabled={button} >Complete Deposit</button>
            </>
            )}
        />
    );
}



const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;
const Link = ReactRouterDOM.link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);


function  Card(props){
    
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : '  ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card  mb-3' + bg  + txt;
    }
    
    return (
        <div className={classes()} style={{maxWidth:"18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title &&  (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}




function Login(){
    return (
      <h1>Login</h1>,
      <button onclick= "Welcome to your account" > Login </button>
    )  
  }
