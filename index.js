let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrcodeImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    if (qrText.value ==""){
        alert("Please Enter Text")
    }
    else{
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("visible-img");
    }

    
}
