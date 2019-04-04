//Challenge 1
const day = 'Thursday';
const time = '11AM:03:38';

// concatenation
console.log('Today is:' +day+ ' Current time is:' +time);

//Challenge 2
// website URL
console.log(document.URL);

// Challenge 3
function start_spec_str(str)
{
  if (str.length < 4)
  {
    return false;
  }
  front = str.substring(0, 4);
  if (front == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
  }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Tiyiselani"));

//Challenge 4 
 const b = "JavaScript";
 console.log(b.includes('Java'));
 console.log(b.includes('Umuzi'));

//Challenge 5
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Javascript challenge for umuzi to capitalize the first letter of each word of a given string."));


//Challenge 6
function Convert_time(x) {
  var num = x;
  var hours = (num / 60);
  var roundhours = Math.floor(hours);
  var minutes = (hours - roundhours) * 60;
  var roundminutes = Math.round(minutes);
  return + roundhours + " hour(s) : " + roundminutes + " minute(s).";
  }
  
  console.log(Convert_time(170));
  console.log(Convert_time(210));
  console.log(Convert_time(420));
  console.log(Convert_time(196));