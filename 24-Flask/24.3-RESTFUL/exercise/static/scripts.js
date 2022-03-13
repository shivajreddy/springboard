//* GET all cupcakes
const cupcakeContent = (cupcake) => {
  $('#all-cakes').append(
    `<div>
      <div class="card m-2">
        <div class="card-body">
          <h5 class="card-title text-primary">id: ${cupcake.id}</h5>
          <img src="${cupcake.image}" class="card-img-top" style="height: 15rem;" alt="...">
          <li>Flavor: ${cupcake.flavor}</li>
          <li>Size: ${cupcake.size}</li>
          <li>Rating: ${cupcake.rating}</li>
        </div>
      </div>
    </div>`
    );
  };

async function getAllCookies() {
  const response = await axios.get('/api/cupcakes/');
  const allCookies = response.data['result'];
  console.log(allCookies);

  for (const cookie of allCookies){
    cupcakeContent(cookie);
  }
}
getAllCookies();


//* POST new cookie
$btn = $('#addbtn')
$btn.on('click', async (e)=>{
  e.preventDefault();
  
  const flavor = $('#cake-flavor').val();
  const size = $('#cake-size').val();
  const rating = $('#cake-rating').val();
  let image = $('#cake-image').val();
  if (image === "") {
    image = "https://www.bakedbyrachel.com/wp-content/uploads/2018/01/chocolatecupcakesccfrosting1_bakedbyrachel.jpg"
  }

  const resp = await axios.post('/api/cupcakes/',
  {
    "flavor" : flavor,
    "size" : size,
    "rating" : parseFloat(rating),
    "image" : image,
  });

  window.location.reload();

});

