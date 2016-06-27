/** 
   Author: Gabe Lorenzo
   A small project JavaScript & jQuery project that was requested
   for a job application.
*/
$(function() {
  //var $tag = ('#terminput').val();
  console.log('Program Started');
  var numPosTags = 0;
  $('.tagcountpos').html(numPosTags + ' Tags Created');
  var numNegTags = 0;
  $('.tagcountneg').html(numNegTags + ' Tags Created');

  $('#termbtn').on('click', function() {
    var tagterm = $('#terminput').val();
    var selectval = $('#selectval option:selected').val();

    if (selectval === "Positive" && tagterm !== "") {
      $('#termspos').append("<li class='poslistitem'><span class='tag label label-info postag'><span>" +
        tagterm + "</span><a><i class='remove glyphicon glyphicon-remove-sign glyphicon-white'></i></a></li></ul> ");
      $('#inputerror').html("");
      $('#selecterror').html("")
      $('#terminput').val('');
      numPosTags++;
      $('.tagcountpos').html(numPosTags + ' Tags Created');
    } else if (selectval === "Negative" && tagterm !== "") {
      $('#termsneg').append("<li class='neglistitem'><span class='tag label label-info negtag '><span>" +
        tagterm + "</span><a><i class='remove glyphicon glyphicon-remove-sign glyphicon-white'></i></a></li></ul>");
      $('#inputerror').html("");
      $('#selecterror').html("")
      $('#terminput').val('');
      numNegTags++;
      $('.tagcountneg').html(numNegTags + ' Tags Created');
    } else if (selectval === "Choose a tag type" && tagterm !== "") {
      $('#selecterror').html("*This Field is required")
    } else {
      $('#inputerror').html("*This Field is required");
    }

    // Function to delete tags - See appended HTML above for DOM hierarchy of tag
    $('.remove').on('click', function() {
      var $this = $(this); // the i element with class name .remove
      var listItem = $this.closest('li');
      listItem.remove();
      //numNegTags--;
      //$('.tagcountneg').html(numNegTags + ' Tags Created');
    });

    // Function to run when a tag is clicked
    $(".tag").on('click', function() {
      var $this = $(this);
      var str = $this.text();
      // Puts list item's text in the input field
      $('#terminput').val(str);
      // Get's the ancestor div of the tag with class name .panel
      var tagList = $this.closest('.panel');
      // Get the previous sibling of the div, which is a p element
      var tagListSibling = tagList.prev();
      // Sibling (the p element) contains text saying either Positive or Negative
      var siblingText = tagListSibling.text();
      console.log(siblingText);
      $('#selectval').val(siblingText);
    });

    // Sorts list of tags alphabetically, when user clicks submit
    function sortAlpha(a, b) {
      return $(a).find('span').text().toLowerCase() > $(b).find('span').text().toLowerCase() ? 1 : -1;
    };
    $('#termspos li').sort(sortAlpha).appendTo('#termspos');
    $('#termsneg li').sort(sortAlpha).appendTo('#termsneg');
  }); // End termbtn onclick function
  
  $('#terminput').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#termbtn').click();//Trigger button click event
            return false; // Page won't refresh
        }
    });

  // Clears all items in the positive category
  $('#clearallpos').on('click', function() {
    $('.poslistitem').remove();
     numPosTags = 0;
    $('.tagcountpos').html(numPosTags + ' Tags Created');
  });
  
  // Clears all list items in the positive category
  $('#clearallneg').on('click', function() {
    $('.neglistitem').remove();
    numNegTags = 0;
    $('.tagcountneg').html(numNegTags + ' Tags Created');
  });
  
  // Make list items Sortable/draggable list
  $(function() {
    var sorted = $( ".list-unstyled" ).sortable({
    });
});
  
});