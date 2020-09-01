var n = 2000 ;

if(n % 4 == 0 || ( n % 100 == 0 && n % 400 == 0)){
    console.log(n ,"là năm nhuân")
}else{
    console.log(n , "là năm không nhuận")
} ;