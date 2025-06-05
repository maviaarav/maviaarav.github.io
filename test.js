let  droparea = document.querySelector("#drop-area");
let input_file = document.querySelector("#input-file");
let drop_view = document.querySelector("#drop_view");

input_file.addEventListener("change", uploadimages); 
 function  uploadimages(){
  let files = input_file.files[0];
  let imgURL = URL.createObjectURL(files);
  drop_view.innerHTML = `<img src="${imgURL}" alt="Image" class="image">`;
}
