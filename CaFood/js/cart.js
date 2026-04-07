// Cart Management System
class CartManager {
    constructor() {
        this.cart = this.loadCart();
    }
    
    loadCart() {
        return JSON.parse(localStorage.getItem('cart') || '[]');
    }
    
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateBadge();
    }
    
    addItem(item) {
        const existing = this.cart.find(i => i.id === item.id);
        if (existing) {
            existing.quantity += item.quantity;
        } else {
            this.cart.push(item);
        }
        this.saveCart();
        this.showNotification(`${item.name} added to cart!`);
    }
    
    removeItem(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
    }
    
    updateQuantity(itemId, change) {
        const item = this.cart.find(i => i.id === itemId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeItem(itemId);
            }
            this.saveCart();
        }
    }
    
    getTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    getItemCount() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    updateBadge() {
        const badge = document.getElementById('cartCount');
        if (badge) {
            badge.textContent = this.getItemCount();
        }
    }
    
    showNotification(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }
    
    clearCart() {
        this.cart = [];
        this.saveCart();
    }
}

// Queue System
class QueueManager {
    static generateQueueNumber() {
        const queues = JSON.parse(localStorage.getItem('queues') || '[]');
        const newNumber = queues.length + 1;
        queues.push({
            number: newNumber,
            timestamp: new Date().toISOString(),
            status: 'pending'
        });
        localStorage.setItem('queues', JSON.stringify(queues));
        return newNumber;
    }
    
    static getCurrentQueue() {
        const queues = JSON.parse(localStorage.getItem('queues') || '[]');
        return queues.filter(q => q.status !== 'completed');
    }
}

// Order System
class OrderManager {
    static createOrder(orderData) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const order = {
            id: Date.now(),
            orderNumber: `ORD-${Date.now()}`,
            queueNumber: QueueManager.generateQueueNumber(),
            ...orderData,
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        return order;
    }
    
    static updateOrderStatus(orderId, status) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            order.updatedAt = new Date().toISOString();
            localStorage.setItem('orders', JSON.stringify(orders));
            return true;
        }
        return false;
    }
    
    static getUserOrders(userId) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        return orders.filter(o => o.userId === userId);
    }
}

// Export for use in other files
window.CartManager = CartManager;
window.QueueManager = QueueManager;
window.OrderManager = OrderManager;