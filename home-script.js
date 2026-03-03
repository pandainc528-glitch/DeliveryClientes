// ============================================
// HOME - ÑAN DELIVERY
// ============================================

// Datos de productos por categoría
const productsData = {
    restaurantes: [
        {
            id: 'rest-1',
            name: 'Hamburguesa',
            price: 2.50,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
            category: 'restaurantes'
        },
        {
            id: 'rest-2',
            name: 'Almuerzo',
            price: 2.50,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/imgDelivary/pollo-con-champinones.jpg?w=393&h=260&ar=393%3A260',
            category: 'restaurantes'
        },
        {
            id: 'rest-3',
            name: 'Seco',
            price: 2.00,
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
            category: 'restaurantes'
        },
        {
            id: 'rest-4',
            name: 'Papipollo',
            price: 1.50,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/res/db9963dae6840ec30e2eb0797a887b61.avif?w=684&h=456&ar=684%3A456',
            category: 'restaurantes'
        },
        {
            id: 'rest-5',
            name: 'Fritada',
            price: 1.50,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/res/fritada-de-chancho_web.jpg.webp?w=482&h=294',
            category: 'restaurantes'
        }
    ],
    mercado: [
        {
            id: 'merc-1',
            name: 'Azúcar 2 kg',
            price: 2.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/mercado/azucar-blanca-1024x1024.jpg?w=1024&h=1024&ar=1024%3A1024',
            category: 'mercado'
        },
        {
            id: 'merc-2',
            name: 'Sal 1kg',
            price: 0.50,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/mercado/OIP.webp?w=474&h=474',
            category: 'mercado'
        },
        {
            id: 'merc-3',
            name: 'Fideos Cayambe 1 L',
            price: 0.70,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/mercado/7/fideo-macarron-cayambe-400-g.jpg?w=1000&h=1000',
            category: 'mercado'
        },
        {
            id: 'merc-3',
            name: 'Aceite 1 litro',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/7861223826616-1-19.jpg?w=1500&h=1500',
            category: 'mercado'
        },
        {
            id: 'merc-4',
            name: 'Arroz 1L',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/images.jpg?w=258&h=195&ar=258%3A195',
            category: 'mercado'
        },
        {
            id: 'merc-5',
            name: 'Tallarines oriental',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/OIP%20(1).webp?w=474&h=474',
            category: 'mercado'
        },
        {
            id: 'merc-6',
            name: 'Bebida hidratante powerde 1L mora Azul',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/mercado/1000213252.jpg?w=700&h=700',
            category: 'mercado'
        },
        {
            id: 'merc-7',
            name: 'Tallarines Don Victorio',
            price: 1.25,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/images%20(1).jpg?w=224&h=225&ar=224%3A225',
            category: 'mercado'
        },
        {
            id: 'merc-8',
            name: 'Azúcar 1 kg',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/images%20(2).jpg?w=194&h=259',
            category: 'mercado'
        },
        {
            id: 'merc-9',
            name: 'Sal 2kg',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/OIP%20(2).webp?w=474&h=474',
            category: 'mercado'
        },
        {
            id: 'merc-10',
            name: 'Atun real',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/REA020.jpg?w=768&h=768',
            category: 'mercado'
        },
        {
            id: 'merc-11',
            name: 'Cocoa en polvo',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/61uWnSQYSLL._AC_UF894,1000_QL80_.jpg?w=616&h=1000',
            category: 'mercado'
        },
        {
            id: 'merc-12',
            name: 'Sardina Real 500 g',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/40518667_0120230613152910.jpg?w=1200&h=1200',
            category: 'mercado'
        },
        {
            id: 'merc-13',
            name: 'Sardina Real 800 g',
            price: 1.25,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/OIP%20(3).webp?w=443&h=232&ar=443%3A232',
            category: 'mercado'
        },
        {
            id: 'merc-14',
            name: 'VIVE100 300ml Original',
            price: 0.50,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/7862106704458-1-12.jpg',
            category: 'mercado'
        },
        {
            id: 'merc-14',
            name: 'Pepsi 1L',
            price: 0.50,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/7862109438268pesi1lt-e1732980014289.webp?w=500&h=752',
            category: 'mercado'
        },
        {
            id: 'merc-15',
            name: 'Pepsi 2L',
            price: 1.00,
            image: 'https://69963448b3906ad69abd5f52.imgix.net/whatsapp_image_2024-03-15_at_12.07.20.jpeg?w=1200&h=1200',
            category: 'mercado'
        }

    ],
    farmacia: [
        {
            id: 'farm-1',
            name: 'Curita',
            price: 0.10,
            image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop',
            category: 'farmacia'
        },
        {
            id: 'farm-2',
            name: 'Alcohol',
            price: 1.30,
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
            category: 'farmacia'
        },
        {
            id: 'farm-3',
            name: 'Preservativos',
            price: 2.50,
            image: 'https://images.unsplash.com/photo-1550572017-4332d4e6a8e5?w=400&h=400&fit=crop',
            category: 'farmacia'
        }
    ],
    ferreteria: [
        {
            id: 'ferr-1',
            name: 'Foco led',
            price: 1.00,
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop',
            category: 'ferreteria'
        },
        {
            id: 'ferr-2',
            name: 'Martillo',
            price: 6.00,
            image: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=400&h=400&fit=crop',
            category: 'ferreteria'
        },
        {
            id: 'ferr-3',
            name: '1L Clavos',
            price: 0.70,
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop',
            category: 'ferreteria'
        },
        {
            id: 'ferr-4',
            name: 'Martillo',
            price: 6.00,
            image: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=400&h=400&fit=crop',
            category: 'ferreteria'
        }
    ]
};

// Variables globales
let currentUser = null;
let currentCategory = 'restaurantes';
let cart = [];
let favorites = [];

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', async function() {
    
    // Inicializar Firebase
    const firebaseInitialized = initializeFirebase();
    
    if (!firebaseInitialized) {
        console.error('Error al inicializar Firebase');
        window.location.href = 'index.html';
        return;
    }
    
    // Cargar datos del carrito y favoritos desde localStorage
    loadCartFromStorage();
    loadFavoritesFromStorage();
    
    // Verificar autenticación
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            currentUser = user;
            await loadUserData(user);
            renderProducts(currentCategory);
        } else {
            // No hay usuario autenticado, redirigir al login
            window.location.href = 'index.html';
        }
    });
    
    // Event listeners
    setupCategoryListeners();
    setupNavigationListeners();
});

// ============================================
// CARGAR DATOS DEL USUARIO
// ============================================

async function loadUserData(user) {
    try {
        // Mostrar foto de perfil
        const profilePic = document.getElementById('profilePic');
        if (user.photoURL) {
            profilePic.innerHTML = `<img src="${user.photoURL}" alt="Perfil">`;
        } else {
            // Usar primera letra del nombre
            const initial = user.displayName ? user.displayName.charAt(0).toUpperCase() : '👤';
            profilePic.innerHTML = `<span style="font-size: 24px; font-weight: 600; color: #c62828;">${initial}</span>`;
        }
        
        // Mostrar nombre de usuario
        const userName = document.getElementById('userName');
        userName.textContent = user.displayName || user.email || 'Usuario';
        
        // Actualizar lastLogin en Firestore
        const db = firebase.firestore();
        await db.collection('users').doc(user.uid).update({
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        // Cargar favoritos desde Firestore
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            favorites = userData.favorites || [];
        }
        
        console.log('✅ Datos de usuario cargados');
        
    } catch (error) {
        console.error('Error al cargar datos del usuario:', error);
    }
}

// ============================================
// CATEGORÍAS
// ============================================

function setupCategoryListeners() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remover clase active de todas las categorías
            categoryCards.forEach(c => c.classList.remove('active'));
            
            // Agregar clase active a la categoría seleccionada
            this.classList.add('active');
            
            // Obtener categoría
            const category = this.getAttribute('data-category');
            currentCategory = category;
            
            // Actualizar título
            const title = document.getElementById('selectedCategoryTitle');
            title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            
            // Renderizar productos
            renderProducts(category);
        });
    });
}

// ============================================
// RENDERIZAR PRODUCTOS
// ============================================

function renderProducts(category) {
    const productsSection = document.getElementById('productsSection');
    const products = productsData[category] || [];
    
    if (products.length === 0) {
        productsSection.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <p class="empty-state-text">No hay productos disponibles</p>
            </div>
        `;
        return;
    }
    
    productsSection.innerHTML = '';
    
    products.forEach(product => {
        const isFavorite = favorites.includes(product.id);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${product.id}')">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        
        // Click en el producto (sin incluir el botón de favorito)
        productCard.addEventListener('click', function(e) {
            if (!e.target.closest('.favorite-btn')) {
                showAddToCartModal(product);
            }
        });
        
        productsSection.appendChild(productCard);
    });
}

// ============================================
// FAVORITOS
// ============================================

window.toggleFavorite = async function(productId) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        // Remover de favoritos
        favorites.splice(index, 1);
    } else {
        // Agregar a favoritos
        favorites.push(productId);
    }
    
    // Guardar en localStorage
    localStorage.setItem('nanAppFavorites', JSON.stringify(favorites));
    
    // Guardar en Firestore
    if (currentUser) {
        try {
            const db = firebase.firestore();
            await db.collection('users').doc(currentUser.uid).update({
                favorites: favorites
            });
        } catch (error) {
            console.error('Error al actualizar favoritos:', error);
        }
    }
    
    // Re-renderizar productos
    renderProducts(currentCategory);
};

// ============================================
// CARRITO
// ============================================

function showAddToCartModal(product) {
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="modal-product-name">${product.name}</h3>
            <p class="modal-product-price">$${product.price.toFixed(2)}</p>
            <p class="modal-question">¿Deseas agregar este producto al carrito?</p>
            <div class="modal-buttons">
                <button class="modal-btn modal-btn-cancel" onclick="closeAddToCartModal()">
                    Cancelar
                </button>
                <button class="modal-btn modal-btn-confirm" onclick="confirmAddToCart('${product.id}')">
                    Agregar
                </button>
            </div>
        </div>
    `;
    
    // Agregar estilos del modal si no existen
    if (!document.head.querySelector('style[data-modal]')) {
        const modalStyles = document.createElement('style');
        modalStyles.setAttribute('data-modal', 'true');
        modalStyles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: #ffffff;
                border-radius: 20px;
                padding: 25px;
                max-width: 320px;
                width: 90%;
                text-align: center;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.3s ease;
            }
            
            .modal-product-image {
                width: 120px;
                height: 120px;
                margin: 0 auto 15px;
                border-radius: 15px;
                overflow: hidden;
            }
            
            .modal-product-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .modal-product-name {
                font-size: 18px;
                font-weight: 700;
                color: #2c2c2c;
                margin-bottom: 8px;
            }
            
            .modal-product-price {
                font-size: 22px;
                font-weight: 700;
                color: #c62828;
                margin-bottom: 15px;
            }
            
            .modal-question {
                font-size: 15px;
                color: #5f6368;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            
            .modal-buttons {
                display: flex;
                gap: 10px;
            }
            
            .modal-btn {
                flex: 1;
                padding: 12px 20px;
                border: none;
                border-radius: 25px;
                font-size: 15px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .modal-btn-cancel {
                background: #f5f5f5;
                color: #5f6368;
            }
            
            .modal-btn-cancel:active {
                background: #e0e0e0;
                transform: scale(0.98);
            }
            
            .modal-btn-confirm {
                background: linear-gradient(135deg, #c62828 0%, #b71c1c 100%);
                color: #ffffff;
                box-shadow: 0 4px 12px rgba(198, 40, 40, 0.3);
            }
            
            .modal-btn-confirm:active {
                transform: scale(0.98);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }
    
    document.body.appendChild(modal);
    
    // Guardar referencia al producto
    window.currentProductToAdd = product;
}

window.closeAddToCartModal = function() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                document.body.removeChild(modal);
            }
        }, 300);
    }
    window.currentProductToAdd = null;
};

window.confirmAddToCart = function(productId) {
    const product = window.currentProductToAdd;
    
    if (product) {
        addToCart(product);
        closeAddToCartModal();
    }
};

function addToCart(product) {
    // Buscar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Guardar en localStorage
    saveCartToStorage();
    
    // Actualizar badge del carrito
    updateCartBadge();
    
    // Mostrar mensaje
    showToast(`${product.name} agregado al carrito`);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    badge.textContent = totalItems;
    
    if (totalItems > 0) {
        badge.classList.add('show');
    } else {
        badge.classList.remove('show');
    }
}

function saveCartToStorage() {
    localStorage.setItem('nanAppCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('nanAppCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartBadge();
    }
}

function loadFavoritesFromStorage() {
    const savedFavorites = localStorage.getItem('nanAppFavorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
}

// ============================================
// NAVEGACIÓN
// ============================================

function setupNavigationListeners() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // Remover active de todos
            navItems.forEach(i => i.classList.remove('active'));
            
            // Agregar active al seleccionado
            this.classList.add('active');
            
            // Navegar según la página
            navigateToPage(page);
        });
    });
}

function navigateToPage(page) {
    switch (page) {
        case 'home':
            // Ya estamos en home
            break;
        case 'cart':
            // Redirigir a página de carrito
            window.location.href = 'cart.html';
            break;
        case 'favorites':
            // Redirigir a favoritos
            window.location.href = 'favorites.html';
            break;
        case 'profile':
            // Redirigir a perfil
            window.location.href = 'profile.html';
            break;
    }
}

// ============================================
// NOTIFICACIONES
// ============================================

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        animation: slideUp 0.3s ease;
        max-width: 90%;
        text-align: center;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    
    if (!document.head.querySelector('style[data-toast]')) {
        style.setAttribute('data-toast', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 2000);
}

console.log('✅ Home de Ñan Delivery inicializado');
