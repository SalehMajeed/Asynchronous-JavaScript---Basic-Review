const btn = document.querySelector('button')

    btn.addEventListener('click', ()=>{
        let mydate;
        for(let i=0; i<10000000; i++){
            let date = new Date();
            mydate = date
        }

        console.log(mydate)

        let pElem = document.createElement('p')
        pElem.textContent = 'This is a newly-added paragraph.'
        document.body.appendChild(pElem)
    })