document.addEventListener('DOMContentLoaded', function () {
  var movieContainers = document.querySelectorAll('.pick1');

  function saveMovieToLocalStorage(title, overview, genre) {
    if (typeof Storage !== 'undefined') {
      let moviesData = JSON.parse(localStorage.getItem('movies')) || [];

      var movieData = {
        title: title,
        overview: overview,
        genre: genre
      };

      moviesData.push(movieData);

      localStorage.setItem('movies', JSON.stringify(moviesData));
    } else {
    }
  }

  movieContainers.forEach(container => {
    container.addEventListener('click', function () {
      var title = container.querySelector('#title1').textContent;
      var overview = container.querySelector('#overview1').textContent;
      var genre = container.querySelector('#genre1').textContent;

      saveMovieToLocalStorage(title, overview, genre);
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var movieContainers = document.querySelectorAll('.pick2');

  function saveMovieToLocalStorage(title2, overview2, genre2) {
    if (typeof Storage !== 'undefined') {
      let moviesData = JSON.parse(localStorage.getItem('movies')) || [];

      var movieData = {
        title2: title2,
        overview2: overview2,
        genre2: genre2
      };

      moviesData.push(movieData);

      localStorage.setItem('movies', JSON.stringify(moviesData));
    } else {
    }
  }

  movieContainers.forEach(container => {
    container.addEventListener('click', function () {
      var title2 = container.querySelector('#title2').textContent;
      var overview2 = container.querySelector('#overview2').textContent;
      var genre2 = container.querySelector('#genre2').textContent;

      saveMovieToLocalStorage(title2, overview2, genre2);
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var movieContainers = document.querySelectorAll('.pick3');

  function saveMovieToLocalStorage(title3, overview3, genre3) {
    if (typeof Storage !== 'undefined') {
      let moviesData = JSON.parse(localStorage.getItem('movies')) || [];

      var movieData = {
        title3: title3,
        overview3: overview3,
        genre3: genre3
      };

      moviesData.push(movieData);

      localStorage.setItem('movies', JSON.stringify(moviesData));
    } else {
    }
  }

  movieContainers.forEach(container => {
    container.addEventListener('click', function () {
      var title3 = container.querySelector('#title3').textContent;
      var overview3 = container.querySelector('#overview3').textContent;
      var genre3 = container.querySelector('#genre3').textContent;

      saveMovieToLocalStorage(title3, overview3, genre3);
    });
  });
});
