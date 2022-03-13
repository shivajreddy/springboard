
async function newCookie(data) {
  const resp = await axios.post('/api/cupcakes', data);
  axios.post('api/cupcakes/', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

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
    "image" : image
  });

});


