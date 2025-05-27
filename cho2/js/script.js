// 자바 스크립트 함수 만들어 보기
function changeMessage() {
    var img = document.getElementById("sample-img");
    if(img){
        img.src = "img/image2.jpg";
    }else {
        alert("이미지 태그를 찾을 수 없습니다");
    }
}