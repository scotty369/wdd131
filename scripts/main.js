// Product Array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];
  
  // Populate Product Options
  const productNameSelect = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
  });
  
  // Set Current Year and Last Modified Date
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
  