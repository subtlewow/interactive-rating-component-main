const submitBtn = document.getElementById('btn')
const radioBtns = document.querySelectorAll('input[name="rating"]')
const img = document.getElementById('star-svg')
const title = document.getElementById('title')
const passage = document.getElementById('passage')
const form = document.getElementById('rating-form')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let selected;
    for (const radio of radioBtns) {
        if (radio.checked) {
            selected = radio.value;
            break;
        } else {

        }
    }

    img.remove();
    title.remove();
    passage.remove();
    form.remove();
    submitBtn.remove();

    let el = document.createElement('img')
    let imgDiv = document.createElement('div')
    let selectText = document.createElement('span')
    let head = document.createElement('h1')
    let content = document.createElement('p')

    el.src = 'images/illustration-thank-you.svg'
    el.classList.add('mx-auto', 'mb-8')
    el.setAttribute('id', 'new-img')

    imgDiv.classList.add('text-center', 'my-10')
    imgDiv.setAttribute('id', 'div-span')

    selectText.setAttribute('id', 'rating-selected')
    selectText.classList.add('px-4', 'py-2', 'rounded-3xl', 'text-orange-400', 'text-sm', 'bg-slate-700')
    selectText.textContent = `You selected ${selected} out of 5`

    head.setAttribute('id', 'heading')
    head.classList.add('text-2xl', 'text-white', 'mt-10', 'mb-4')
    head.textContent = 'Thank you!'

    content.classList.add('text-slate-400', 'text-sm', 'leading-5')
    content.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    
    document.getElementById('main-div').insertAdjacentElement('afterbegin', el)
    document.getElementById('new-img').insertAdjacentElement('afterend', imgDiv)
    document.getElementById('div-span').insertAdjacentElement('afterbegin', selectText)
    document.getElementById('rating-selected').insertAdjacentElement('afterend', head)
    document.getElementById('heading').insertAdjacentElement('afterend', content)
})

