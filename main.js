let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let mohamed=document.querySelector('.mohamed');
let    home=document.querySelector('.home');
let    prodect=document.querySelector('.prodect');
let shop=document.querySelector('.shop');
let    about=document.querySelector('.about');
let contact=document.querySelector('.contact');
let logo=document.querySelector('.logo');
window.onscroll=function(){
let value=scrollY;
stars.style.left=value+'px';
moon.style.top=value*3+'px';
mountains3.style.top=value*1.2+'px';
mountains4.style.top=value*1.2+'px';
river.style.top=value+'px';
boat.style.top=value+'px';
boat.style.left=value*3+'px';
river.style.left=value*3+'px';
mohamed.style.fontSize=value+'px';
if(scrollY>=67){
    mohamed.style.fontSize=67+'px';
    mohamed.style.position='fixed';
    if(scrollY>=433){
mohamed.style.display='none';

    }else{
        mohamed.style.display='block';
    }
  /*  if(scrollY>=612){
        logo.style.fontSize=612+'px';
        logo.style.position='fixed';*/
        if(scrollY>=635){
            logo.style.display='none';
        
            } else{
                logo.style.display='block';
            }
        if(scrollY>=635){
        home.style.display='none';
    
        } else{
            home.style.display='block';
        }
        if(scrollY>=635){
            prodect.style.display='none';
        
            } else{
                prodect.style.display='block';
            }
            if(scrollY>=635){
                shop.style.display='none';
            
                } else{
                    shop.style.display='block';
                }
                if(scrollY>=635){
                    about.style.display='none';
                
                    } else{
                        about.style.display='block';
                    }
                    if(scrollY>=635){
                        contact.style.display='none';
                    
                        } else{
                            contact.style.display='block';
                        }
  
}
}

