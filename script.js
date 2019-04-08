/**
  * Created by Yasin Sunmaz
  * Date: 08.04.2019
  * Time: 21:10
  */
  $(".category").click(function(){
    //First
    var firstValue=$(this).attr("data-status");
    alert("First value= "+firstValue);
    //Second
    //Attr data change
    $(this).attr("data-status", "true");
    //Get data-status
    var secondValue=$(this).attr("data-status");
    alert("Last value= "+secondValue);
  });