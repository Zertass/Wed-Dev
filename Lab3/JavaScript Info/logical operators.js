//first task
alert( null || 2 || undefined ); //2
//second task
alert( alert(1) || 2 || alert(3) );//1 then 2
//third task
alert( 1 && null && 2 ); //null
//fourth task
alert( alert(1) && alert(2) ); //1 then undefined
//fifth task
alert( null || 2 && 3 || 4 ); // 3