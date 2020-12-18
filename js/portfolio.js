let imagenes = [1, 2, 3, 4, 5, 6];
let galeria = document.getElementById('galeria');

for (imagen of imagenes) {
    galeria.innerHTML += `
    <!-- Card -->
    <div class="card my-3 border-0 imgCard">
        <a href="#" data-toggle="modal" data-target="#id${imagen}">
            <img class="card-img-top" src="img/Portfolio/${imagen}.png"
                alt="">
        </a>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog"
        aria-labelledby="modalImgLabel" aria-hidden="true">
        <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <img class="img-fluid rounded" src="img/Portfolio/${imagen}.png"
                alt="">
        </div>
    </div> `
}