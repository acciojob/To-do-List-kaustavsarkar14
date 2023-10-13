//your code here
const input = document.getElementById('newTodoInput')
const btn = document.getElementById('addTodoBtn')
const todoList = document.getElementById('todoList')
btn.addEventListener('click',e=>{
	if(input.value!=""){
		const li = document.createElement('li')
		li.innerText = input.value
		todoList.appendChild(li)
	}
})
