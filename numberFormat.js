function numberFormat(val, isMinus, isFloat, isComma){
    var str = val;
    //마이너스, 소수점을 제외한 문자열 모두 제거
    str = str.replace(/[^-\.0-9]/g, '');

    //마이너스
    if(isMinus){
       str = chgMinusFormat(str);   
    } else {
       str = str.replace('-','');
    }
    
    //소수점
    if(isFloat){
       str = chgFloatFormat(str);       
    } else {
       if(!isMinus ){
          str = str.replace('-','');
       }
       str = str.replace('.','');
       if(str.length>1){
          str = Math.floor(str);
          str = String(str);
       }
    }
    
    //콤마처리
    if(isComma){
       var parts = str.toString().split('.');
       if(str.substring(str.length - 1, str.length)=='.'){
          str = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",") +".";
       } else {
          str = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",") + (parts[1] ? "." + parts[1] : "");
       }
    }

    return str;
}

function chgFloatFormat(str){
    var idx = str.indexOf('.');  
    if(idx<0){  
       return str;
    } else if(idx>0){
       var tmpStr = str.substr(idx+1);    
       if(tmpStr.length>1){             
          if(tmpStr.indexOf('.')>=0){        
                tmpStr =  tmpStr.replace(/[^\d]+/g, '');                  
                 str = str.substr(0,idx+1) + tmpStr;
          }
       }    
    } else if(idx==0){
          str = '0'+str;
    }
    return str;  
}
    
function chgMinusFormat(str){
  var idx = str.indexOf('-');
  if(idx==0){
  var tmpStr = str.substr(idx+1);
     //뒤에 마이너스가 또 있는지 확인
         if(tmpStr.indexOf('-')>=0){
         tmpStr = tmpStr.replace('-','');
         str = str.substr(0,idx+1) + tmpStr;  
         }
      } else if(idx>0){
         str = str.replace('-','');
      } else if(idx<0){
         return str;
       }
  return str;
}
