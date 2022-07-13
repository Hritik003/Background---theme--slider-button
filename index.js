const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function theme(){
  if(document.body.style.backgroundColor== "black"){
    document.body.style.backgroundColor= "white";
  }
  else{
    document.body.style.backgroundColor= "black";
  }

});
