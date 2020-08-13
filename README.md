# Basic_Calculator
Basic calculator with basic Javascript
Css style added.
To work properly must add the CSS and JS files and also the calculator.ttf Fonts in the same folder/repository.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Google Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
  
    <link rel="stylesheet" href="style.css">
    <title>Calculator</title>
</head>
<body>
    <div id="container">
    <h1>A Calculator with vanilla javacsript.</h1>
        <div id="calculator" >
          <div id="result">
            <div id="history">
              <p id="history-value"></p>
            </div>
             <div id="output">
                 <p id="output-value"></p>
             </div>
            </div>
            <div id="keyboard" class="calculator-keys">
                <button type="button" class="operator btn btn-info" value="%" id="%">&percnt;</button>
                
                
                <button type="button" class="operator btn btn-info" value="/" id="/">&divide;</button>
                
                <button type="button" class="operator btn btn-info" value="*" id="*"> &times;</button>
                
           
                <button type="button" class="operator btn btn-info" value="-" id="-">-</button>
                <button type="button" class="operator btn btn-info" value="+" id="+">+</button>
                

                
                <button type="button" value="9" class="btn btn-light waves-effect number" id="9">9</button>
                <button type="button" value="8" class="btn btn-light waves-effect number" id="8">8</button>
                <button type="button" value="7" class="btn btn-light waves-effect number" id="7">7</button>
               
                
                <button type="button" value="6" class="btn btn-light waves-effect number" id="6">6</button>
                <button type="button" value="5" class="btn btn-light waves-effect number" id="5">5</button>
                <button type="button" value="4" class="btn btn-light waves-effect number" id="4">4</button>
                <button type="button" value="3" class="btn btn-light waves-effect number" id="3">3</button>
                <button type="button" value="2" class="btn btn-light waves-effect number" id="2">2</button>
                
                <button type="button" value="1" class="btn btn-light waves-effect number" id="1">1</button>
                 
                <button type="button" value="0" class="btn btn-light waves-effect number" id="0">0</button>
                <button type="button" class="decimal function btn btn-secondary number" value="." id=".">.</button>


                <button type="button" class="operator function btn btn-danger btn-sm" id="clear"   style="font-size: 1.35rem!important; ">AC</button>
                <button type="button" class="operator function btn btn-danger btn-sm"  id="backspace"    style="font-size: 2rem!important;">C</button>
               
                
                <button type="button" class="equal-sign operator btn btn-default" value="=" id="=" style="font-size: 4rem!important;" >=</button>
        
            </div>
        </div>


   </div>
     <!-- JQuery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
    <script src="/script.js"></script>
</body>
</html>
