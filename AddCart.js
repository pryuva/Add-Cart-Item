let divcontainer=document.createElement("div");
divcontainer.classList.add("d-flex", "flex-column","divcon");
document.body.append(divcontainer);


let header=document.createElement("h1");

header.classList.add("head","mb-5");
header.innerText="Add to Cart";
divcontainer.append(header);


let subdiv=document.createElement("div");
subdiv.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
subdiv.classList.remove("flex-column");
subdiv.classList.add("flex-row");
divcontainer.append(subdiv);


let InputElement=document.createElement("input");
InputElement.setAttribute("type","text");
InputElement.setAttribute("id","InputToAddItem");
InputElement.setAttribute("placeholder","Enter Product Name");
InputElement.classList.add("inp","mb-2");
subdiv.append(InputElement);

let ButtonElement=document.createElement("button");
ButtonElement.classList.add("btn","btn-primary","button");
ButtonElement.innerText="Add";
ButtonElement.id="ButtonToAddItem";
subdiv.append(ButtonElement);


let h3element=document.createElement("h3");
h3element.innerText="My Cart items";
h3element.classList.add("head1");
divcontainer.append(h3element);



let AddedItes=document.getElementById("ButtonToAddItem");
let inputitem=document.getElementById("InputToAddItem");

AddedItes.onclick=function(){
    Itemadded();
}


function Itemadded(){
    let item=inputitem.value;
    inputitem.value="";
    let listelement=document.createElement("li");
    listelement.classList.add("list-group-item","list");
    listelement.innerText=item;
    divcontainer.append(listelement);
}
