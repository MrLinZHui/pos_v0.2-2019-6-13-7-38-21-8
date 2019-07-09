'use strict';
var menu = loadAllItems();
//console.log(menu[0].price);
function printReceipt(inputs) {
  //console.log('请在此实现练习要求，并改写该行代码。');
  var ReceiptString = "***<没钱赚商店>收据***\n";
  var order1 = countSameElements(inputs);
    //console.log("order1:"+order1[1].count);
    if(order1){
        ReceiptString += countAndprintOrder(order1);
    }else{
        ReceiptString = "[ERROR]:";
    }  
   // console.log(Itemstr);
   console.log(ReceiptString);
    return ReceiptString;

}
function countSameElements(inputs) {
  var array=[];
  const map = inputs.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
  for (var [key,value] of map) {  
    var object1 ={
      key:key,
      count: value
}
array.push(object1);
}
 return array;
}
//makeReceipts(order);
  
function countAndprintOrder(order){
    var sum = 0.00;
    var ReceiptString1 = "";
    var simplesum = 0.00;
    var simpleReceiptString1 = "";
    for(let i = 0; i < order.length; i++){
        var simplesum = 0.00;
        var simpleReceiptString1 = "";
        var simpleOrder = order[i];
        for(let j = 0; j < menu.length; j++){
            var simplemenu = menu[j];
            if(simpleOrder.key==simplemenu.barcode){
                simplesum = countOrder(simpleOrder,simplemenu);
                simpleReceiptString1 += printOrder(simpleOrder,simplemenu)+".00(元)，小计："+simplesum+".00(元)\n";
                sum+=simplesum;
                ReceiptString1 += simpleReceiptString1;
                //sum +=countOrder(simpleOrder,simplemenu);
                //ReceiptString1 += printOrder(simpleOrder,simplemenu);
            }
            continue;
        }
    }
     ReceiptString1 += "----------------------\n";
     ReceiptString1 += "总计：" + sum+".00(元)\n";
     ReceiptString1 += "**********************";
    
    // console.log("sum:"+sum);
    return ReceiptString1;
}
function countOrder(order,menu1){
    var OrderPay = 0.00;
    OrderPay = order.count * menu1.price;
    return OrderPay;
}
//var ordert = [{key: "0001", count: 1},{key: "0003", count: 2},{key: "0005", count: 1}];
function printOrder(order1,menu1){
    var ReceiptString2 = "";
    ReceiptString2 ="名称：" + menu1.name+"，数量：" + order1.count+menu1.unit + "，单价：" + menu1.price;
    return ReceiptString2;
}
