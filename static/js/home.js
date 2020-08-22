let products = [];
let actualProduct = null;
let filteredProducts = [];
let tabIndex = 1;

function onDelete(id) {
  fetch(HOST + "product/" + id, {
    method: "delete",
  }).then((res) => {
    if (res.status === 200) {
      filteredProducts = filteredProducts.filter((e) => e.id !== id);
      products = products.filter((e) => e.id !== id);
      renderProducts();
    }
  });
}
function onEdit(id) {
  actualProduct = products.find((e) => e.id === id);
  const { name, price, category, url } = actualProduct;
  widget.classList.remove("d-none");
  setValues(name, price, category, url);
}

function setValues(name, price, category, url) {
  document.getElementById("name").value = name;
  document.getElementById("price").value = price;
  document.getElementById("category").value = category;
  document.getElementById("Widget__img").src = url;
}
function filterProducts(key) {
  const search = document.getElementById("search");
  let value = search.value;
  if (key === -1) {
    value = value.substring(0, value.length - 1);
  } else if (key) {
    value += key;
  }
  filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().indexOf(value.toLowerCase()) == 0;
  });
  tabIndex = 1;
}
function renderProducts(key) {
  if (key) filterProducts(key);
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  filteredProducts.forEach((product, index) => {
    if (index < tabIndex * 10) {
      productsContainer.innerHTML += `
            <div class="Home__Product">
                <img
                    src="${product.url}"
                    class="Product__img"
                    alt="product"
                />
                <div class="Product__info">
                    <p class="Product__name">${product.name}</p>
                    <p class="Product__price">$${product.price}</p>
                    <img onclick="onDelete('${product.id}')" class="Product__btn" src="/static/assets/trash.svg"/>
                    <img onclick="onEdit('${product.id}')" class="Product__btn" src="/static/assets/pencil.svg"/>
                </div>
        </div>
            `;
    }
  });
  if (tabIndex * 10 < filteredProducts.length) {
    productsContainer.innerHTML += `<p id="more-products" class="Home__more-products">+</p>`;
    document.getElementById("more-products").addEventListener("click", () => {
      tabIndex++;
      renderProducts();
    });
  }
}

window.addEventListener("load", () => {
  //elements
  const widget = document.getElementById("widget");
  const btnClose = document.getElementById("close-widget");
  const submit = document.getElementById("submit");
  const search = document.getElementById("search");
  search.addEventListener("keypress", (e) => {
    renderProducts(e.key);
  });
  search.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) {
      renderProducts(-1);
    }
  });

  const file = document.getElementById("file");
  const img = document.getElementById("Widget__img");
  const reader = new FileReader();
  file.addEventListener("change", () => {
    reader.readAsDataURL(file.files[0]);
  });
  reader.onloadend = () => {
    img.src = reader.result;
  };

  submit.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    if (file.files) {
      formData.append("image", file.files[0]);
    }
    if (actualProduct) {
      const options = {
        method: "PUT",
        body: JSON.stringify({ name, price, category }),
        headers: { "Content-Type": "application/json" },
      };
      fetch(HOST + "product/" + actualProduct.id, options).then((res) => {
        if (res.status === 200) {
          products = products.map((p) => {
            if (p.id === actualProduct.id) {
              return {
                id: actualProduct.id,
                name,
                price,
                category,
                url: actualProduct.url,
              };
            } else return p;
          });
          widget.classList.add("d-none");
          renderProducts();
        }
      });
    } else {
      const options = {
        method: "POST",
        body: formData,
      };
      fetch(HOST + "product/", options)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then((res) => {
          if (res) {
            products.push({ id: res.id, name, price, category, url: res.url });
            widget.classList.add("d-none");
            renderProducts();
          }
        });
    }
  });

  btnClose.addEventListener("click", () => {
    actualProduct = null;
    widget.classList.add("d-none");
  });

  document.getElementById("new-product").addEventListener("click", () => {
    actualProduct = null;
    setValues("", "", "", "");
    document.getElementById("widget").classList.remove("d-none");
  });

  fetch(HOST + "products")
    .then((res) => res.json())
    .then((res) => {
      products = res.products;
      filteredProducts = products;
      renderProducts();
    })
    .catch(() => renderProducts());
});
