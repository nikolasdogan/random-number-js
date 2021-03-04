function randomnum(){document.getElementById("textbox1").value =Math.round(Math.floor(Math.random() * 999999) + 1);}

<div class="input-group">
  <span class="input-group-addon"><input type="button" class="btn btn-small" onclick="randomnum()" value="Random Button"/></span>
  <input type="text" id="textbox1" value="" required class="form-control"/>
</div>       
