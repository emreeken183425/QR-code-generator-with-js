function generateQR(){
    document.querySelector("#qr-image").style.display="black";
    let QRtext=document.querySelector("#text").value;
    if(QRtext.trim().length=0){
        document.querySelector("#qr-image .error ").innerHTML="please enter text";
        document.querySelector("#img").style.display="none";
    }else{
        document.querySelector("#img").style.display="block";
        document.querySelector("#qr-image .error").innerHTML="";
        document.querySelector("#img").src="" +QRtext;
    }

}