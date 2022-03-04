// // const movies = "https://www.omdbapi.com/?i=tt3896198&apikey=5ec28603";
// $.ajax({
//   url: "https://www.omdbapi.com/?i=tt3896198&apikey=5ec28603&s=the raid",
//   success: (results) => {

//     const movies = results.Search;
//     let cards = "";
//     for (movie of movies) {
//       cards += `<div class="col-md-4 my-5">
//                     <div class="card">
//                         <img src="${movie.Poster}" class="card-img-top">
//                         <div class="card-body">
//                         <h5 class="card-title">${movie.Title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
//                         <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid=${movie.imdbID}>Show Details</a>
//                         </div>
//                     </div>
//                 </div>`;
//     }
//     $(".movie-container").html(cards);
//     $(".modal-detail-button").on('click', function() {
//         $.ajax({
//             url: "https://www.omdbapi.com/?i=tt3896198&apikey=5ec28603&i=" + $(this).data('imdbid'),
//             success: movie => {
//                 const movieDetail = `<div class="container-fluid">
//                                         <div class="col-md-3">
//                                             <img src=${movie.Poster} ${movie.Year} class="img-fluid">
//                                         </div>
//                                         <div class="col-md">
//                                             <ul class="list-group">
//                                                 <li class="list-group-item"><h4>${movie.Title}</h4></li>
//                                                 <li class="list-group-item"><strong>${movie.Director}:</strong></li>
//                                                 <li class="list-group-item"><strong>${movie.Actors}:</strong></li>
//                                                 <li class="list-group-item"><strong>${movie.Writer}:</strong></li>
//                                                 <li class="list-group-item"><strong>${movie.Plot}:</strong><br>cang</li>
//                                             </ul>
//                                         </div>
//                                     </div>`
//                     $('.modal-body').html(movieDetail)
//             },
//             error: (e) => {
//                 console.log(e.responseText)
//             },
//     });

//         },
//         error: (e) => {
//             console.log(e.responseText)
//             },

//   };
// })

const search = document.querySelector(".search-button");
search.addEventListener("click", (e) => {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=5ec28603&s=" +
      inputKeyword.value
  )
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      for (let movie of movies) {
        cards += showCards(movie);
        const movieContainer = document.querySelector(".movie-container");
        movieContainer.innerHTML = cards;
        const modalDetailButton = document.querySelectorAll(
          ".modal-detail-button"
        );
        for (let modal of modalDetailButton) {
          modal.addEventListener("click", function () {
            const imdbID = this.dataset.imdbid;
            fetch(
              "https://www.omdbapi.com/?i=tt3896198&apikey=5ec28603&i=" + imdbID
            );
          });
        }
      }
    });
});

function showCards(movie) {
  return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid=${movie.imdbID}>Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(movie) {
  return `<div class="container-fluid">
            <div class="row>
                <div class="col-md-3">
                    <img src=${movie.Poster} ${movie.Year} class="img-fluid">
                </div>
                                          <div class="col-md">
                                              <ul class="list-group">
                                                  <li class="list-group-item"><h4>${movie.Title}</h4></li>
                                                  <li class="list-group-item"><strong>${movie.Director}:</strong></li>
                                                  <li class="list-group-item"><strong>${movie.Actors}:</strong></li>
                                                  <li class="list-group-item"><strong>${movie.Writer}:</strong></li>
                                                  <li class="list-group-item"><strong>${movie.Plot}:</strong><br>cang</li>
                                              </ul>
                                          </div>
              </div>
          </div>`;
}
