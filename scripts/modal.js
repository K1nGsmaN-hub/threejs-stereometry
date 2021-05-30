document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('div.modal')
  const btnCloseModal = modal.querySelector('button.close')

  btnCloseModal.addEventListener('click', () => {
    modal.classList.add('disable')
  })


  const formulasPreview = document.querySelectorAll('.previews__item')
  const data = {
    cube: {
      title: 'Куб',
      imgPath: 'images/piramide.png',
      descr: 'это куб'
    },
    cilindre: {
      title: 'Цилиндр', 
      imgPath: 'images/piramide.png',
      descr: 'это куб'
    },
    piramide: {
      title: 'Пирамида', 
      imgPath: 'images/piramide.png',
      descr: 'это куб'
    },
    cone: {
      title: 'Конус', 
      imgPath: 'images/piramide.png',
      descr: 'это куб'
    },
    sphere: {
      title: 'Сфера', 
      imgPath: 'images/piramide.png',
      descr: 'это куб'
    },
    huinya: {
      title: 'dadsa', 
      imgPath: 'images/cube.png',
      descr: 'eto huinya'
    }
  }

  formulasPreview.forEach(item => {
    item.addEventListener('click', () => {
      const { title, imgPath, descr } = data[item.dataset.name]

      modal.querySelector('.modal-content h2 span').textContent = title
      modal.querySelector('.modal-content div.image img').src = imgPath
      modal.querySelector('.modal-content div.descr p').textContent = descr

      modal.classList.remove('disable')
    })
  })  
})