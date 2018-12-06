//ASCII uppercase ranges from A=65 to Z=90
//ASCII lowercase ranges from a=97 to z=122
//ASCII codes that are used for typing range from 32-126
//We want to shift the codes by 5

//encrypt is a boolean value.  True for encrypt, false for decrypt.
function caesercipher(str,encrypt) {
    if (encrypt == true) {
        let encryptedStr = "";
        for (let i = 0; i < str.length; i++){
            let charCode = str.charCodeAt(i);
            charCode += 5;   //Add 5 to shift each charater's ascii code.
            if (charCode > 126) {
                charCode -= 95;  //Subtract 95 to overflow when the character code exceeds 126.  There are 95 Typeable ASCII codes, 127->32, 128->33...
            }
            let char = String.fromCharCode(charCode);
            encryptedStr = encryptedStr + char;
        }
        return encryptedStr;
    } else {
        let decryptedStr = "";
        for (let i = 0; i < str.length; i++){
            let charCode = str.charCodeAt(i);
            charCode -= 5;
            if (charCode < 32) {
                charCode += 95;
            }
            let char = String.fromCharCode(charCode);
            decryptedStr = decryptedStr + char;
        }
        return decryptedStr;
    }
}










// var text === (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) 
// var (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) = function myfunction() {
	
// 	if () {
//  a === ('97');
	
//  b === ('98');
   
//  c === ('99');
   
//  d === ('100');
   
//  e === ('101');
   
//  f === ('102');
   
//  g === ('103');
 
//  h === ('104');
 
//  i === ('105');
 
//  j === ('106');
    
//  k === ('107');
 
//  l === ('108');
 
//  m === ('109');
 
//  n === ('110');
 
//  o === ('111');
 
//  p === ('112');
    
//  q === ('113');
    
//  r === ('114');
    
//  s === ('115');
 
//  t === ('116');
    
//  u === ('117');
 
//  v === ('118');
    
//  w === ('119');
 
//  x === ('120');
    
//  y === ('121');
   
//  z === ('122');
   
// }
// 	}
