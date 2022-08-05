let box = document.querySelectorAll('.box')

function animation() {
    box.forEach(item => {
        item.onmouseenter = () => {
            item.classList.toggle('box_post')
            let ball = item.querySelector('.ball')
            ball.classList.toggle('ball_post')

            let add = item.querySelector('.add')
            let buy = item.querySelector('.buy')
            add.ondblclick = () => {
                ball.classList.toggle('ball_cost')
                add.classList.toggle('add_post')
                buy.classList.toggle('buy_post')
            }
            add.ondblclick = () => {
                ball.classList.toggle('ball_cost')
                add.classList.toggle('add_post')
                buy.classList.toggle('buy_post')
            }
        }
        item.onmouseleave = () => {
            item.classList.toggle('box_post')
            let ball = item.querySelector('.ball')
            ball.classList.toggle('ball_post')

            let add = item.querySelector('.add')
            let buy = item.querySelector('.buy')
            add.ondblclick = () => {
                ball.classList.toggle('ball_cost')
                buy.classList.toggle('buy_post')
            }
            add.ondblclick = () => {
                ball.classList.toggle('ball_cost')
                buy.classList.toggle('buy_post')
            }
        }
    })
}
animation()

let tuda_p = document.querySelector('.tuda_p')
let syda_p = document.querySelector('.syda_p')

let father_one = document.querySelector('.father')
let father_two = document.querySelector('.father_two')

tuda_p.onclick = () => {
    tuda_p.style.color = "white"
    tuda_p.style.borderBottom = '4px solid orange'

    syda_p.style.color = '#9D9390'
    syda_p.style.borderBottom = 'none'

    father_one.style.width = '100%'
    father_one.style.backgroundColor = '#3A3330'
    father_one.style.display = 'flex'
    father_one.style.alignItems = 'center'

    father_two.style.display = 'none'
}

syda_p.onclick = () => {
    syda_p.style.color = "white"
    syda_p.style.borderBottom = '4px solid orange'

    tuda_p.style.color = '#9D9390'
    tuda_p.style.borderBottom = 'none'

    father_two.style.width = '100%'
    father_two.style.backgroundColor = 'red'
    father_two.style.display = 'flex'
    father_two.style.alignItems = 'center'

    father_one.style.display = 'none'
}