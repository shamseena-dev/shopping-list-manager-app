//Define UI variables
const form = document.querySelector("#shopping-form");
const shoppingList = document.querySelector(".list1");
const clearButton = document.querySelector(".clear-button");
const filter = document.querySelector("#search");
const listInput = document.querySelector("#shoppingItem");
const msg = document.querySelector(".errorMessage");
//const msg2 = document.querySelector(".messageEmpty");

/*function checkIfEmpty(){
if(!shoppingList.firstElementChild){
	console.log(shoppingList.hasChildNodes(),"there no");
	msg2.style.display = 'block';
	msg2.innerHTML = '<p>Your Shopping List is empty now!<p>';
}
else{
	var list 
		console.log(shoppingList.firstElementChild, "here");
	msg2.style.display = 'none';
}
}*/
//Load Event Listeners

function loadEventListeners(){
	//checkIfEmpty();
	//Add shopping item
	form.addEventListener('submit', addItem);
	//Remove shopping item
	shoppingList.addEventListener('click', removeItem);
	//Mark Done on shopping item(once shopping is done)
	shoppingList.addEventListener('click', doneItem);
	//Clear shopping list
	clearButton.addEventListener('click', clearList);
	//Filter/search item
	filter.addEventListener('keyup', searchItem);



}
loadEventListeners();

//Add item

function addItem(e){
	if(listInput.value.trim() === ''){
		msg.style.display = 'block';
	    msg.innerHTML = '<p>**Please enter an Item to add</p>';
        e.preventDefault();	
	}
	else{
		msg.style.display = 'none';
		//create li element
		const li=document.createElement('li');
		console.log("else");
		//Add class
		li.className='list-group-item';
		//Create text node and append li
		li.appendChild(document.createTextNode(listInput.value));
		//create new button element
		const link=document.createElement('button');
		//Add Class to the button
		link.className = 'delete-item btn btn-danger';
		//Add text 'Delete' to the button
		link.innerHTML = 'Delete';
		//link.innerHTML='<i class="fa fa-remove removeIcon" title="Remove Item"></i>';
		//create button "done" ,add class and text to it
		const btnDone = document.createElement('button');
		btnDone.className = 'btn done btn-success btnStyle';
		btnDone.innerHTML = 'Done';

		//Append link to li
		li.appendChild(link);
		li.appendChild(btnDone);
		//Append li to ul
		shoppingList.appendChild(li);

		//Clear input
		listInput.value='';
		e.preventDefault();	
	}
}

//Remove item
function removeItem(e){
	//
	/*if(e.target.parentElement.classList.contains("delete-item")){
	if(e.target.parentElement.classList.contains("delete-item")){
			e.target.parentElement.parentElement.remove();
		
	} */
	if(e.target.classList.contains("delete-item")){
			e.target.parentElement.remove();
		
	} 
}
//Done item(when shopping is done)
function doneItem(e){
	console.log(e.target);
		console.log(e.target.parentElement);

	if(e.target.classList.contains("done")){
		e.target.parentElement.classList.add('strike');
		console.log(e.target.parentElement,"here");
		e.target.classList.remove('done');
		e.target.classList.remove('btn-success');
		e.target.classList.add('undo');
		e.target.classList.add('btn-secondary');

		e.target.innerHTML = "Undo";
	
	}
	else if(e.target.classList.contains("undo")){
		e.target.parentElement.classList.remove('strike');

		e.target.classList.remove('undo');
		e.target.classList.remove('btn-secondary');
		e.target.classList.add('done');
		e.target.classList.add('btn-success');
		e.target.innerHTML = "Done";
	} 

}
//Clear list

function clearList(){
	shoppingList.innerHTML='';
	/*while(shoppingList.firstChild){
		shoppingList.removeChild(shoppingList.firstChild);
	}*/

}

//Search/filter item

function searchItem(e){
	const text= e.target.value.toLowerCase();
	document.querySelectorAll('.list-group-item').forEach(function(item){
		console.log(item);
		const eachItem=item.firstChild.textContent;
		if(eachItem.toLowerCase().indexOf(text)!= -1){
			item.style.display = 'block';
		}
		else{
			item.style.display = 'none';
		}
	});

}