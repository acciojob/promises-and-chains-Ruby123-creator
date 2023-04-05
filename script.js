let inputs = document.querySelectorAll("input");
inputs[2].addEventListener("click",check)
let obj ={};
function check(e){
    e.preventDefault()
    if(inputs[0].value!==""&&inputs[1].value!==""){
            checkPromise().then((resolve)=>{alert(resolve)})
            .catch((reason)=>{
                alert(reason)
            })
    }
    else{
        document.querySelector("span").innerText = "please fill the inputs";
    }
    obj.name = inputs[0].value;
    obj.age = inputs[1].value;
}

 function checkPromise(){
    
    return new Promise((resolve ,reject)=>{
        // console.log(inputs[0].value)
        setTimeout(()=>{
            // console.log(obj);
            if(obj.age>18){
                resolve(`Welcome, ${obj.name} . You can vote.`)
                
            }
            else{
                reject(`Oh sorry ${obj.name}. You aren't old enough.`)
                
            }
        },4000)
    })
    
}