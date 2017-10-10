$( document ).ready(function() {
  matches = $("#c")
  var h = matches.height();
  var w = matches.width();
  var c = $("#c")[0];
  c.height = h
  c.width = w
  var ctx = c.getContext("2d");
  
  draw_color_grad(ctx, h, w);
  var v = get_years_and_days_since();
  draw_header(ctx, v[0], v[1], "of Bird and Bee", h, w);
  draw_main_text(ctx, h, w);

  // position bee
  var bee = $("#bee");
  print(bee)
  bee.css({
    left: w/2 - bee.width()/2+'px',
    bottom: 25 + 'px'
    // bee.position().top+
  });
});

function draw_color_grad(ctx, h, w) {
  var my_gradient = ctx.createLinearGradient(0,0,0,h*2/3);
  my_gradient.addColorStop(0, "#ff2d88");
  my_gradient.addColorStop(1, "#fcfa71");
  ctx.fillStyle = my_gradient;
  ctx.fillRect(0, 0, w, h);
}

function draw_header(ctx, numYears, numDays, s3, h, w) {
  s1 = numYears.toString() + " Year"
  if (numYears != 1) {
    s1 += "s"
  }
  s2 = numDays.toString() + " day"
  if (numDays != 1) {
    s2 += "s"
  }
  var x = w / 2;
  var y1 = 100;
  var y2 = 135;
  var y3 = 175;
  ctx.font = "50px Verdana";
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.fillText(s1, x, y1);
  ctx.font = "20px Verdana";
  ctx.fillText(s2, x, y2);
  ctx.font = "25px Verdana";
  ctx.fillText(s3, x, y3);
}

function draw_main_text(ctx, h, w) {
  var x = w / 2;
  var maxW = w - 100;
  var lineHeight = 50;
  var y = 250;
  ctx.font = "20px Verdana";
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  msg = "Time flies. Whether wasted or spent, you can always keep track of it here. I am so proud of the woman you have become. Your bird will always love you."
  var words = msg.split(' ');
  var line = '';
  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxW && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function get_years_and_days_since() {
  var dateB = new Date();
  var yearB = dateB.getFullYear();
  var dayB = dateB.getDate();

  var dateA = new Date('10/10/2016');
  var yearA = dateA.getFullYear();
  var dayA = dateA.getDate();

  var dsnyA = get_days_since_new_year(dateA);
  var dsnyB = get_days_since_new_year(dateB)+1;

  var numYears = yearB - yearA
  if (dsnyB < dsnyA) {
    numYears -= 1
  }
  var numDays = Math.abs(dsnyB - dsnyA);
  if (dsnyB < dsnyA) {
    numDays = 365 - numDays
  }

  return [numYears, numDays]
}

function get_days_since_new_year(now) {
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day
}

// var dt = new Date();  

// // Display the month, day, and year. getMonth() returns a 0-based number.  
// var month = dt.getMonth()+1;  
// var day = dt.getDate();  
// var year = dt.getFullYear();  
// document.write(month + '-' + day + '-' + year);
// var dt = new Date('8/24/2009');

function print(s) {
  console.log(s)
}
