import { products } from './data.js';

const container = document.getElementById('product-container');
const typeFilter = document.getElementById('typeFilter');
const connectivitySelect = document.getElementById('connectivitySelect');

function render(list) {
  container.innerHTML = '';

  list.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'card';

    const discounted = Math.round(
      product.price - (product.price * product.discount) / 100
    );

    card.innerHTML = `

${product.new ? '<span class="badge">New Edition</span>' : ''}

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Rating: ${product.rating} ⭐</p>

<p>Type: ${product.type}</p>

<p>Connectivity: ${connectivitySelect.value}</p>

<p class="old">₹${product.price}</p>

<p class="new">₹${discounted}</p>

<button>Add to Cart</button>

`;

    container.appendChild(card);
  });
}

render(products);

typeFilter.addEventListener('change', () => {
  const value = typeFilter.value;

  if (value === 'all') {
    render(products);
  } else {
    const filtered = products.filter((p) => p.type === value);
    render(filtered);
  }
});

connectivitySelect.addEventListener('change', () => {
  render(products);
});
