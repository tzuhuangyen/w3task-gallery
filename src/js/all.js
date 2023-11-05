const productList = document.querySelector("#productList");
//filter by food type
const filterBtn = document.querySelectorAll(".filter-btn");
//product list
const products = [
  {
    id: 1,
    name: "Pet Snack 1",
    img_url: "../images/proddetail-1.jpg",
    price: 10.99,
    type: "chicken",
    order: "pre-order",
  },
  {
    id: 2,
    name: "Pet Snack 2",
    img_url: "../src/images/proddetail-2.jpg",
    price: 12.99,
    type: "beef",
    order: "in stock",
  },
  {
    id: 3,
    name: "Pet Snack 3",
    img_url: "../src/images/proddetail-3.png",
    price: 8.49,
    type: "pork",
    order: "in stock",
  },
  {
    id: 4,
    name: "Pet Snack 4",
    img_url: "../src/images/proddetail-4.jpg",
    price: 15.99,
    type: "duck",
    order: "customized",
  },
  {
    id: 5,
    name: "Pet Snack 5",
    img_url: "../src/images/proddetail-5.jpg",
    price: 9.99,
    type: "chicken",
    order: "customized",
  },
  {
    id: 6,
    name: "Pet Snack 6",
    img_url: "../src/images/proddetail-6.jpg",
    price: 11.49,
    type: "beef",

    order: "in stock",
  },
  {
    id: 7,
    name: "Pet Snack 7",
    img_url: "../src/images/proddetail-7.jpg",
    price: 13.99,
    type: "pork",
    order: "in stock",
  },
  {
    id: 8,
    name: "Pet Snack 8",
    img_url: "../src/images/proddetail-8.jpg",
    price: 14.49,
    type: "duck",
    order: "pre-order",
  },
  {
    id: 9,
    name: "Pet Snack 9",
    img_url: "../src/images/proddetail-9.jpg",
    price: 7.99,
    type: "chicken",
    order: "pre-order",
  },
  {
    id: 10,
    name: "Pet Snack 10",
    img_url: "../src/images/proddetail-10.jpg",
    price: 16.99,
    type: "other",
    order: "customized",
  },
];
//create cards of products
const createProductCard = (product) => {
  const card = document.createElement("div");
  card.classList.add("col-lg-3");
  card.classList.add("col-md-4");

  card.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <img src="${product.img_url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${product.order}</p>
                    <p class="card-text">${product.name}</p>
                    <p class="card-text">Price: $${product.price}</p>
                    <p class="card-text">Type: ${product.type}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        
    `;
  return card;
};
//render products
const renderProducts = () => {
  products.forEach((product) => {
    const card = createProductCard(product);
    productList.appendChild(card);
    // console.log(productList);
  });
};
renderProducts();

const originalProducts = [...products]; // 复制原始产品列表
// filter by  type
filterBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const type = e.target.dataset.btn;
    console.log(type);
    productList.innerHTML = "";

    products.forEach((product) => {
      if (type === "allBtn") {
        renderProducts(originalProducts);
      }
      if (type === product.type) {
        const card = createProductCard(product);
        productList.appendChild(card);
      }
      if (type === product.order) {
        const card = createProductCard(product);
        productList.appendChild(card);
      }
    });
  });
});

//filter by price
const sortSelect = document.querySelector("#sortSelect");
sortSelect.addEventListener("change", (e) => {
  const selectedValue = e.target.value;

  if (selectedValue === "increase") {
    // 按升序排序
    products.sort((a, b) => a.price - b.price);
  } else if (selectedValue === "decrease") {
    // 按降序排序
    products.sort((a, b) => b.price - a.price);
  }

  renderProducts(products);
});
