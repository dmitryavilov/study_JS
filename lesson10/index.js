'use strict';

const booksWrapper = document.querySelector('.books'),
      books = booksWrapper.querySelectorAll('.book'),
      chapters2 = books[0].querySelectorAll('li'),
      chapters5 = books[5].querySelectorAll('li'),
      chapters6 = books[2].querySelectorAll('li'),
      ad = document.querySelector('.adv'),
      wrongTitle = books[4].querySelector('h2').querySelector('a');

      
      booksWrapper.prepend(books[4]);
      booksWrapper.prepend(books[0]);
      booksWrapper.prepend(books[1]);
      booksWrapper.append(books[2]);

      document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

      wrongTitle.textContent = 'Книга 3. this и Прототипы Объектов';

      ad.style.display = "none";

      
      books[0].querySelector('ul').prepend(chapters2[8]);
      books[0].querySelector('ul').prepend(chapters2[6]);
      books[0].querySelector('ul').prepend(chapters2[3]);
      books[0].querySelector('ul').prepend(chapters2[2]);
      books[0].querySelector('ul').prepend(chapters2[1]);
      books[0].querySelector('ul').prepend(chapters2[0]);
      books[0].querySelector('ul').append(chapters2[7]);
      books[0].querySelector('ul').append(chapters2[9]);   
      books[0].querySelector('ul').append(chapters2[2]);
      books[0].querySelector('ul').append(chapters2[10]);   

      books[5].querySelector('ul').append(chapters5[5]);
      books[5].querySelector('ul').append(chapters5[8]);
      books[5].querySelector('ul').append(chapters5[10]);
      books[5].querySelector('ul').prepend(chapters5[4]);
      books[5].querySelector('ul').prepend(chapters5[3]);
      books[5].querySelector('ul').prepend(chapters5[9]);
      books[5].querySelector('ul').prepend(chapters5[1]);
      books[5].querySelector('ul').prepend(chapters5[0]);

      books[2].querySelector('ul').insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
      books[2].querySelector('ul').append(chapters6[9]);
     