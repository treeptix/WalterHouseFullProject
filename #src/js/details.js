window.addEventListener("resize", function() {
    const leftarr = document.querySelector(".leftarr");
    const rightarr = document.querySelector(".rightarr");
    
    if (window.innerWidth <= 700) {
        leftarr.src = "img/page3vip/leftarr320.svg"; // Змінюємо src для мобільних
        rightarr.src = "img/page3vip/rightarr320.svg";
    } 
    
    else if (window.innerWidth <= 900) {
      leftarr.src = "img/page3vip/leftarr768.svg"; // Змінюємо src для мобільних
      rightarr.src = "img/page3vip/rightarr768.svg";
    } 


    
    else {
      leftarr.src = "img/page3vip/leftarr.svg"; // Змінюємо src для десктопних
      rightarr.src = "img/page3vip/rightarr.svg";
    }
  });