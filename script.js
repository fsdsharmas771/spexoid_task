{
    let pointer = document.getElementById('pointer');
    let inputBox = document.getElementById('input');
    let button = document.getElementById('btn');
    let watch = document.getElementById('outer-circle-face');
    button.addEventListener('click',function(){
        // let target = document.getElementById('one');
        let targetCordinate = this.getBoundingClientRect('one');
        console.log(targetCordinate);
        let start = 0;
        let inputValue = inputBox.value;
        let a = setInterval(function(){
            if(inputValue==1){
                if(start>860){
                    clearInterval(a);
                }
            }else if(inputValue==2){
                if(start>810){
                    clearInterval(a);
                }
            }else if(inputValue==3){
                if(start>770){
                    clearInterval(a);
                }
            }else if(inputValue==4){
                if(start>720){
                    clearInterval(a);
                }
            }else if(inputValue==5){
                if(start>680){
                    clearInterval(a);
                }
            }else if(inputValue==6){
                if(start>630){
                    clearInterval(a);
                }
            }else if(inputValue==7){
                if(start>590){
                    clearInterval(a);
                }
            }else if(inputValue==8){
                if(start>540){
                    clearInterval(a);
                }
            }else{
                if(start>900){
                    alert('Invalid Number Input');
                    clearInterval(a);
                }
            }
            start+=10;
            watch.style.transform = `rotate(${start}deg)`;
        },100);
    })
    
}
