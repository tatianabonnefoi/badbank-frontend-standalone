function Home(){
   
    return(
        <Card
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text= "You can use this Bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        
        />
    );
}