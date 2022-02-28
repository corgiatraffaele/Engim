conversioni stringhe e numeri


ret = 1 + 5  -> 6

ret = 1 + '5' -> '15'

ret = '1' + 5 -> '15'

var a= '1'
    
    ret = a + 1 -> '11'

    ret = 1 + 2 + 3 + '4' -> '1234'
    
    ret = '' + 1 -> '1'




var b
    ret= b +1 -> Nan  ( perchè b non è definita. quindi da come risultato NonNumerico)
    b == 1 ->false
    b == undefined -> true
