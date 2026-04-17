// ============================================
// FAVORITOS - ÑAN DELIVERY
// ============================================

// Datos de productos (mismo que en home-script.js)
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
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'restaurantes'
        },
        {
            id: 'rest-3',
            name: 'Seco',
            price: 2.00,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'restaurantes'
        },
        {
            id: 'rest-4',
            name: 'Papipollo',
            price: 1.50,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'restaurantes'
        },
        {
            id: 'rest-5',
            name: 'Fritada',
            price: 1.50,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'restaurantes'
        }
    ],
    mercado: [
        {
            id: 'merc-1',
            name: 'Azúcar 2 kg',
            price: 2.00,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'mercado'
        },
        {
            id: 'merc-2',
            name: 'Sal 1kg',
            price: 0.50,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'mercado'
        },
        {
            id: 'merc-3',
            name: 'Fideos Cayambe 1 L',
            price: 0.70,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'mercado'
        },
        {
            id: 'merc-3',
            name: 'Aceite 1 litro',
            price: 1.00,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
            category: 'mercado'
        },
        {
            id: 'merc-4',
            name: 'Arroz 1L',
            price: 1.00,
            image: 'https://res.cloudinary.com/dh1serbqk/image/upload/v1776270112/tre_ttp2x8.png',
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
let favorites = [];
let cart = [];
let allProducts = [];

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
    
    // Crear array plano de todos los productos
    allProducts = Object.values(productsData).flat();
    
    // Cargar carrito desde localStorage
    loadCartFromStorage();
    updateCartBadge();
    
    // Verificar autenticación
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            currentUser = user;
            await loadFavorites();
            renderFavorites();
        } else {
            window.location.href = 'index.html';
        }
    });
});

// ============================================
// CARGAR FAVORITOS
// ============================================

async function loadFavorites() {
    try {
        // Intentar cargar desde Firestore
        const db = firebase.firestore();
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        
        if (userDoc.exists) {
            const userData = userDoc.data();
            favorites = userData.favorites || [];
            console.log('✅ Favoritos cargados desde Firestore:', favorites);
        } else {
            // Fallback a localStorage
            const savedFavorites = localStorage.getItem('nanAppFavorites');
            if (savedFavorites) {
                favorites = JSON.parse(savedFavorites);
                console.log('✅ Favoritos cargados desde localStorage:', favorites);
            }
        }
    } catch (error) {
        console.error('Error al cargar favoritos:', error);
        // Fallback a localStorage
        const savedFavorites = localStorage.getItem('nanAppFavorites');
        if (savedFavorites) {
            favorites = JSON.parse(savedFavorites);
        }
    }
}

// ============================================
// RENDERIZAR FAVORITOS
// ============================================

function renderFavorites() {
    const favoritesSection = document.getElementById('favoritesSection');
    const emptyState = document.getElementById('emptyState');
    const favCount = document.getElementById('favCount');
    
    // Actualizar contador
    favCount.textContent = favorites.length;
    
    // Si no hay favoritos, mostrar estado vacío
    if (favorites.length === 0) {
        favoritesSection.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    // Ocultar estado vacío y mostrar lista
    emptyState.style.display = 'none';
    favoritesSection.style.display = 'block';
    
    // Limpiar contenido
    favoritesSection.innerHTML = '';
    
    // Renderizar cada producto favorito
    favorites.forEach((favoriteId, index) => {
        const product = allProducts.find(p => p.id === favoriteId);
        
        if (product) {
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.style.animationDelay = `${index * 0.1}s`;
            
            favoriteItem.innerHTML = `
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-details">
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        <button class="remove-favorite-btn" onclick="removeFavorite('${product.id}')">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </button>
                    </div>
                    <p class="product-category">${getCategoryName(product.category)}</p>
                    <div class="product-footer">
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                            Agregar
                        </button>
                    </div>
                </div>
            `;
            
            favoritesSection.appendChild(favoriteItem);
        }
    });
}

// ============================================
// REMOVER DE FAVORITOS
// ============================================

window.removeFavorite = async function(productId) {
    // Remover del array
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    }
    
    // Guardar en localStorage
    localStorage.setItem('nanAppFavorites', JSON.stringify(favorites));
    
    // Actualizar en Firestore
    if (currentUser) {
        try {
            const db = firebase.firestore();
            await db.collection('users').doc(currentUser.uid).update({
                favorites: favorites
            });
            console.log('✅ Favoritos actualizados en Firestore');
        } catch (error) {
            console.error('Error al actualizar favoritos:', error);
        }
    }
    
    // Obtener nombre del producto
    const product = allProducts.find(p => p.id === productId);
    const productName = product ? product.name : 'Producto';
    
    // Mostrar mensaje
    showToast(`${productName} eliminado de favoritos`);
    
    // Re-renderizar
    renderFavorites();
};

// ============================================
// AGREGAR AL CARRITO
// ============================================

window.addToCart = function(productId) {
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) {
        console.error('Producto no encontrado');
        return;
    }
    
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
    
    // Actualizar badge
    updateCartBadge();
    
    // Mostrar mensaje
    showToast(`${product.name} agregado al carrito`);
};

// ============================================
// FUNCIONES DE CARRITO
// ============================================

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('nanAppCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCartToStorage() {
    localStorage.setItem('nanAppCart', JSON.stringify(cart));
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

// ============================================
// FUNCIONES AUXILIARES
// ============================================

function getCategoryName(category) {
    const names = {
        'restaurantes': 'Restaurantes',
        'mercado': 'Mercado',
        'farmacia': 'Farmacia',
        'ferreteria': 'Ferretería'
    };
    return names[category] || category;
}

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
        @keyframes slideDown {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
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

console.log('✅ Página de favoritos inicializada');
