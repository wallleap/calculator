function getVal(val){
  cal.result.value = cal.result.value + val
}
function getResult(){
  if(cal.result.value == ""){
    alert('不能计算呢')
  }else{
    cal.display.value = cal.result.value + '='
    cal.result.value = eval(cal.result.value);
  }
}
function minus(){
  if(cal.result.value.charCodeAt(0) == 45){
    cal.result.value = cal.result.value.substring(1,cal.result.value.length)
  }else{
    cal.result.value = '-' + cal.result.value
  }
}
function del(){
  cal.result.value = cal.result.value.substring(0, cal.result.value.length - 1)
}
window.onload = function(){
  cal.clear.addEventListener('click',function(){
    cal.result.value = ''
    cal.display.value = ''
  })

  document.getElementById('equels').onclick=function(){
    var num1 = +document.getElementById('num1').value
    var num2 = +document.getElementById('num2').value
    var operator = document.getElementById('operator').value
    
    var result = "ERROR: "
    flag = true

    if(num1==''){
      result += "第一个数为空！"
      flag = false
    }else{
      if(isNaN(num1)){
        result += "第一个数不是有效数字！"
        flag = false
      }
    }

    if(num2==''){
      result += "第二个数为空！"
      flag = false
    }else{
      if(isNaN(num2)){
        result += "第二个数不是有效数字！"
        flag = false
      }
    }

    if(flag){
      switch(operator){
        case '+': result = "运算结果: " + num1 +" + "+ num2 + " = " +(num1+num2); break;
        case '-': result = "运算结果: " + num1 +" - "+ num2 + " = " +(num1-num2); break;
        case '*': result = "运算结果: " + num1 +" × "+ num2 + " = " +(num1*num2); break;
        case '/':
          if(num2==0){
            result = "除数不能为0"
          }else{
            result = "运算结果: " + num1 +" ÷ "+ num2 + " = " +(num1/num2)
          }
          break
        case '%': 
          if(num2==0){
            result = "除数不能为0"
          }else{
            result = "运算结果: " + num1 +" % "+ num2 + " = " +(num1%num2)
          }
          break
      }
    }
    document.getElementById('res').value = result
  }
}


