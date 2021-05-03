
//Daily

var shadeA = shadeA(510, 45);
     function shadeA(liters, price){
         return liters * price;
     }
console.log(shadeA)

var shadeB = shadeB(308, 45);
     function shadeB(liters, price){
         return liters * price;
     }
console.log(shadeB)

var shadeC = shadeC(486, 45);
     function shadeC(liters, price){
         return liters * price;
     }
console.log(shadeC)

var shadeD = shadeD(572, 45);
     function shadeD(liters, price){
         return liters * price;
     }
console.log(shadeD)

 
var daily =[22950, 13860, 21870, 25740];
  var sum = daily.reduce(
         function(a, b) {
             return a + b ;
         },  0 
  );
    console.log(sum)

    //weekly

var pricePerWeek = pricePerWeek(84420 , 7);
    function pricePerWeek( sum, week){
        return sum * week ;
    }
    console.log(pricePerWeek)

    //Monthly-January

    var pricePerMonth = pricePerMonth(84420 , 31);
    function pricePerMonth( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth)

    // February

    var pricePerMonth2 = pricePerMonth2(84420 , 29);
    function pricePerMonth2( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth2)

        // March

        var pricePerMonth3 = pricePerMonth3(84420 , 31);
        function pricePerMonth3( sum, month){
            return sum * month ;
        }
        console.log(pricePerMonth3)

            // April

    var pricePerMonth4 = pricePerMonth4(84420 , 30);
    function pricePerMonth4( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth4)

        // May

        var pricePerMonth5 = pricePerMonth5(84420 , 31);
        function pricePerMonth5( sum, month){
            return sum * month ;
        }
        console.log(pricePerMonth5)

            // June

    var pricePerMonth6 = pricePerMonth6(84420 , 30);
    function pricePerMonth6( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth6)

                // july

    var pricePerMonth7 = pricePerMonth7(84420 , 31);
    function pricePerMonth7( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth7)
    
                // August

    var pricePerMonth8 = pricePerMonth8(84420 , 31);
    function pricePerMonth8( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth8)

                // September
    var pricePerMonth9 = pricePerMonth9(84420 , 30);
    function pricePerMonth9( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth9)

                // October

    var pricePerMonth10 = pricePerMonth10(84420 , 31);
    function pricePerMonth10( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth10)

                // November

    var pricePerMonth11 = pricePerMonth11(84420 , 30);
    function pricePerMonth11( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth11)

                // December

    var pricePerMonth12 = pricePerMonth12(84420 , 31);
    function pricePerMonth12( sum, month){
        return sum * month ;
    }
    console.log(pricePerMonth12)

    // Yearly


  var monthly =[2617020 ,
    2448180,
    2617020,
    2532600,
    2617020,
    2532600,
    2617020,
    2617020,
    2532600,
    2617020,
    2532600,
    2617020
    ];
  var sum = monthly.reduce(
         function(a, b) {
             return a + b ;
         },  0 
  );
    console.log(sum)

    