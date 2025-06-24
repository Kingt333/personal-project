document.addEventListener('DOMContentLoaded', () => {
  const linksMenu = document.getElementById('linksMenu');
  const hamburgerMenu = document.getElementById('hamburger');
  const iconCart = document.querySelector('.icon-cart');
  const closeCart = document.querySelector('.close');
  const body = document.querySelector('body');
  body.classList.remove('showCart')
const listProductHTML = document.querySelector('.listCart');
const wishList  = document.querySelector('wishList')

  const checkOutBtn = document.querySelector('.checkout');
  const darkMode = document.querySelector('#dark-mode');
  let toggle = document.querySelector('.toggle');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('switch')

     document.body.classList.toggle('dark')
  })

  document.getElementById("wishList").addEventListener("click", () => {
  window.location.href = "wishlist.html";
});




  let listProducts = [
    {
      id: 1,
      name: "Sample Product",
      price: 999,
      image: "/prg/8b2ba11e4e8cf3ca3599f2abd030d20f.jpg",
      quantity: 0
    }
  ];

  hamburgerMenu.addEventListener('click', () => {
    linksMenu.classList.toggle('show');
  });

  iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');

  });

  closeCart.addEventListener('click', () => {
    body.classList.remove('showCart');
  });

  const addToHTML = () => {
    listProductHTML.innerHTML = `
      <div class="item">
      <div class="image">
            <img src="/prg/8b2ba11e4e8cf3ca3599f2abd030d20f.jpg" alt="">
      </div>
      <div class="totalPrice">
        $999
      </div>
   <div class="quantity">
       <span class="minus"> < </span>
      <span>0</span>
      <span class="plus">></span>
   </div>
    `; 

    listProducts.forEach(product => {
      const newProduct = document.createElement('div');
      newProduct.classList.add('item');
      newProduct.dataset.id = product.id;

      newProduct.innerHTML = `
   
      `;

      listProductHTML.appendChild(newProduct);
    });
  };

  listProductHTML.addEventListener('click', (event) => {
    const btn = event.target;
    const parent = btn.closest('.item');
    if (!parent) return;

    const id = parseInt(parent.dataset.id);
    const product = listProducts.find(p => p.id === id);
    if (!product) return;

    if (btn.classList.contains('plus')) {
      product.quantity++;
    } else if (btn.classList.contains('minus')) {
      product.quantity = Math.max(0, product.quantity - 1);
    }

    addToHTML(); 
  });

  checkOutBtn.addEventListener('click', () => {
    const cartItems = listProducts.filter(product => product.quantity > 0);

    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.location.href = 'checkout.html'; 
  });

  addToHTML();
});
