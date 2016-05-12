var myVideo, playButton,videoURL,fullScreenButton, timeDisplay,progressSlider;

function playOrPause(){
    //alert(myVideo.src);
    //決定影片撥放或暫停，
    //如果影片目前是暫停的，就呼叫影片的方法
    //要不然就呼叫暫停的方法
    //記得改按鈕上的文字
    
    
    
    if(myVideo.paused){
        myVideo.play();
        playButton.value="Pause";
    }
    else{
        myVideo.pause();
        playButton.value="Play";
    }
    
    //顯示影片網址
    videoURL.size=myVideo.src.length;
    videoURL.value=myVideo.src;
          
    myVideo.addEventListener("timeupdate",updateProgress);
    
    //讓slider的最大長度到影片的時間
    progressSlider.max=myvideo.duration;


}

function updateProgress(){
    timeDisplay.innerHTML=
        Math.floor(myVideo.currentTime)+"/"+
        Math.floor(myVideo.duration)+"秒";
    progressSlider.value=myVideo.currentTime;
}


function fullScreen(){
    
    myVideo.webkitEnterFullscreen();
    
}


function changeProgress(){
    myVideo.currentTime=progressSlider.value;
}


window.onload=function(){
    
    myVideo=document.getElementById("myVideo");
    playButton=document.getElementById("playButton");
    playButton.onclick=playOrPause;
    videoURL=document.getElementById("videoURL");
    fullScreenButton=document.getElementById("fullScreenButton");
    fullScreenButton.onclick=fullScreen;
    timeDisplay=document.getElementById("timeDisplay");
    progressSlider=document.getElementById("progressSlider");
    progressSlider.onchange=changeProgress;
    
    
};
