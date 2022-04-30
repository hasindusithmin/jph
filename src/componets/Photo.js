

export default function Photo({photo}) {
    const {title,url} = photo;
    const price = parseFloat(Math.floor(Math.random() * (1000 - 100 + 1) + 5)).toFixed(2);
    const discount = Math.floor(Math.random() * (25 - 5 + 1) + 5)
    return (
        <div className="col-lg-3">
            <div class="card text-center mb-3">
                <div class="py-5 px-4">
                    <img src={url} alt="" class="img-fluid mb-4" />
                    <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">{title}</a></h3>
                    <span class="text-success">${price * (100-discount) / 100}</span> <del class="text-muted">${price}</del>
                </div>
                <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                    <span class="d-block">{discount}%</span>
                    <span class="d-block">OFF</span>
                </div>
            </div>
        </div>
    )
}