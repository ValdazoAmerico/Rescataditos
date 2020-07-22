setTimeout(function(){

    const text = document.querySelector('#animation2')
    const strText = text.textContent
    const splitText = strText.split("")
    text.textContent = ""
    
    for(let i = 0; i < splitText.length; i++){
        text.innerHTML += "<span>" + splitText[i] + "</span>"
    }
    
    let char = 0
    let timer = setInterval(onTick, 50)
    
    function onTick(){
        const span = text.querySelectorAll('span')[char]
        span.classList.add('fade1')
        char++
        if (char == splitText.length){
            complete()
            return
        }
    }
    function complete(){
        clearInterval(timer)
        timer = null
    }
    },2000)


    const img = document.querySelector('img')

    setTimeout(function(){
        img.classList.add('opacity')
    }, 2500)

    const h3 = document.querySelector('h3')

    setTimeout(function(){
        h3.classList.add('opacity')
    }, 5500)



    setTimeout(function(){

        const text = document.querySelector('#animation3')
        const strText = text.textContent
        const splitText = strText.split("")
        text.textContent = ""
        
        for(let i = 0; i < splitText.length; i++){
            text.innerHTML += "<span>" + splitText[i] + "</span>"
        }
        
        let char = 0
        let timer = setInterval(onTick, 150)
        
        function onTick(){
            const span = text.querySelectorAll('span')[char]
            span.classList.add('fade2')
            char++
            if (char == splitText.length){
                complete()
                return
            }
        }
        function complete(){
            clearInterval(timer)
            timer = null
        }
        },5500)