function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  } 

  var countries = ['Pizza', 'Pasta', 'Lasgna', 'Salad', 'Chicken parmesan', 'Breadsticks', 
  'Noodles', 'Fried rice', 'Dumplings', 
  'Bread', 'Baguette', 'Sandwich', 'Sub', 'Hoagie','Bakery', 
  'Chinese', 'Italian',
   'Sushi', 
   'Mexican', 'Tacos', 'Burrito', 'Enchilada', 'Tostadas', 'Quesadilla', 'Arroz con pollo', 'Salsa',
   'Cake', 'Ice-cream', 'Brownie', 'Cookies',  
   'Hamburger', 'American', 'French fries', 'Hot dogs', 'Cheeseburger', 'Chicken sandwhich', 'Fried chicken', 'Steak', 
   'Indian', 'Paneer', 'Samosas', 'Dosa', 'Chicken tikka', 'Chole', 'Chili paneer',
   'Thai', 'Tom kha soup', 'Green curry', 'Red curry', 'Yellow curry', 'Spring rolls', 'Tofu', 'Fried tofu',
   'Japanese', 'California rolls', 'Wasabi']
  autocomplete(document.getElementById("myInput"), countries);

  var countriesX = ['Markham, Ontario, Canada',
   'Downtown Toronto, Ontario, Canada',
   'Vancouver, British Columbia, Canada', 
   'Montreal, Quebec',
   'Victoria, British Columbia, Canada', 
  'Quebec City, Quebec, Canada',
    'Calgary, Alberta, Canada',
    'Ottowa, Ontario, Canada',

   'Kowloon Tong, Hong Kong',
   'Tsuen Wan, Hong Kong', 
   'Shatin, Hong Kong',
   'Sok Kwu Wan, Hong Kong',
   
   'Atlanta, Georgia, United States of America',
   'Alpharetta, Georgia, United States of America',
   'Orlando, Florida, United States of America', 
   'Miami, Florida, United States of America',
   'Tampa, Florida, United States of America',
   'Houston, Texas, United States of America',
   'Austin, Texas, United States of America',
   'Los Angeles, California, United States of America',
   'San Diego, California, United States of America',
   'Sacramento, California, United States of America',
   'Seattle, Washington, United States of America',
   'Washington DC, United States of America',
   'New York City, New York, United States of America',
   'Boston, Massachussetts, United States of America',
   'Chicago, Illinois, United States of America',
   'Phoenix, Arizona, United States of America',
   'Ann Arbor, Michigan, United States of America',
   'Detroit, Michigan, United States of America',
   'St. Louis, Missouri, United States of America',
   'Nashville, Tennessee, United States of America',
   'Sanford, Florida, United States of America', 
   'Philadelphia, Pennsylvania, United States of America',
   'Brooklyn, New York, United States of America',
   'Urbana Champaign, Illinois, United States of America',
   'Taipei City, Taiwan', 
   'Tokyo, Japan']
  autocomplete(document.getElementById("myInput2"), countriesX);

  //https://www.w3schools.com/howto/howto_js_autocomplete.asp