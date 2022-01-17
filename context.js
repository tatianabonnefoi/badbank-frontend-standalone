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

    function balancefromcontext(){
        const ctx = React.useContext(UserContext);
        const [balance, setBalance] =  React.useState(ctx.users[ctx.users.length -1].balance);
        return balance
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
