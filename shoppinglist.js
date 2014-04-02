<script type="text/javascript">
$("#inputItem").keyup(function(event){
    if(event.keyCode == 13){
            $("#addBtn").click();
    }
});

$("#addBtn").click(function(){
  var newItem= $("#inputItem").val();
 
       if (newItem===null || newItem==="")
        {
          alert("Do not leave the field blank");
        }

        else{
         

          var listItem= "<li><input type='checkbox' id='check'><label for='check'>" + newItem + "</label></li>";

          $( "#list" ).append( listItem );
          console.log(listItem);

          $("#inputItem").val('');
        }
});

$("#removeBtn").click(function(){
 
 $.each( $("li").has( "input[type='checkbox']:checked" ), function(){
           /* var i = listArray.indexOf( this );
            listArray.splice( i, 1 );*/
   $(this).remove();
	            
  });
        
  });

</script>
