$(document).ready(function(){
  // your code here!
})

$("input[type='submit']").click(function(e){
	e.preventDefault()
	var userInput = $("input[name='image_url']")
	var userCaption = $("input[name='caption']")

	$("#photo-list").append(function(){
		console.log(userInput.val())
		return `<div><figure><img src=${userInput.val()} alt=${userCaption.val()} style='width:300px;height:300px' alt="${userCaption}"/><figcaption style="color:red">${userCaption.val()}</figcaption></figure></div><br>`
	})
	userInput.val("")
	userCaption.val("")
	
})



