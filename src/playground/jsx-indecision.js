console.log('App js is running');


const app={
    title:'Some title',
    subtitle:'This is subtitle',
    options:[]
};


const onFormSubmit=(e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;  
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        renderAgain();
    } 
};

const removeOptions=()=>{
    app.options=[];
    renderAgain();
};
const onMakeDecision=()=>{
const randomNum=Math.floor(Math.random()*app.options.length);
const option = app.options[randomNum];
alert(option);
};


const appRoot=document.getElementById("app");

const renderAgain = ()=>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0?'Here are your options':'No Options'}</p>
           <button disabled={app.options.length==0} onClick={onMakeDecision}> what should i do ?</button>
           
           <button onClick={removeOptions}>Remove All</button>
         
            <ol>
            {
                app.options.map((option)=>{
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderAgain();

