//your code here
let d = document.querySelectorAll(".image")
div.addEventListener("dragstart",(e)=>{
	console.log("Drag start");
	e.dataTransfer.setData("text",div.id)
})
div.addEventListener("dragend",(e) =>{
	console.log("Drag end")
})
let arr =["dragover","dragenter","drop"]
arr.forEach(items =>{
	let cols = document.querySelectorAll('.image')
	for(let t of cols{
		t.addEventListener(items,(e)=>{
			e.preventDefault();
			if(items == "drop"){
			let imageId = e.dataTransfer.getData("image");
			let movingImage = document.getElementById(imageId);
			// t.append(movingImage)
			}
		})
	}
	})
})