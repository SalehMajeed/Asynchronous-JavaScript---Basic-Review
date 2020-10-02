const btn = document.querySelector('button')

    btn.addEventListener('click', ()=>{
        let mydate;
        for(let i=0; i<10000000; i++){
            let date = new Date();
            mydate = date
            // console.log(mydate) // the process will be more slow due to console
        }

        console.log(mydate)

        // create paragraph using js
        let pElem = document.createElement('p')
        pElem.textContent = 'This is a newly-added paragraph.'
        document.body.appendChild(pElem)
        
        // create div using js
        let div = document.createElement('div')
        div.id = 'motto'
        div.innerText = 'oh now i see how js use to manipulate html and css'
        document.body.appendChild(div)
    })