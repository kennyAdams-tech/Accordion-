const faqs = document.querySelectorAll('.content-box')

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('show')
    })
})
