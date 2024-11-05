import Cart from '../cart';

describe('Movie', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    it('добавляет новый товар в корзину', () => {
        const item = { id: 1, price: 100, isUnique: false };
        cart.addItem(item);
        expect(cart.getItems()).toContainEqual({ id: 1, price: 100, count: 1, isUnique: false });
    });

    it('не добавляет уникальный товар, если он уже есть в корзине', () => {
        const item = { id: 1, price: 100, isUnique: true };
        cart.addItem(item);
        cart.addItem(item);
        expect(cart.getItems()).toHaveLength(1);
    });

    it('увеличивает количество товара в корзине', () => {
        const item = { id: 1, price: 100, isUnique: false };
        cart.addItem(item);
        cart.addItem(item);
        expect(cart.getItems()).toContainEqual({ id: 1, price: 100, count: 2, isUnique: false });
    });

    it('уменьшает количество товара в корзине', () => {
        const item = { id: 1, price: 100, isUnique: false };
        cart.addItem(item);
        cart.addItem(item);
        cart.decreaseItemCount(1);
        expect(cart.getItems()).toContainEqual({ id: 1, price: 100, count: 1, isUnique: false });
    });

    it('удаляет товар из корзины, если количество равно 1', () => {
        const item = { id: 1, price: 100, isUnique: false };
        cart.addItem(item);
        cart.decreaseItemCount(1);
        expect(cart.getItems()).toHaveLength(0);
    });

    it('возвращает список товаров в корзине', () => {
        const item1 = { id: 1, price: 100, isUnique: false };
        const item2 = { id: 2, price: 200, isUnique: false };
        cart.addItem(item1);
        cart.addItem(item2);
        expect(cart.getItems()).toContainEqual({ id: 1, price: 100, count: 1, isUnique: false });
        expect(cart.getItems()).toContainEqual({ id: 2, price: 200, count: 1, isUnique: false });
    });

    it('удаляет товар из корзины по id', () => {
        const item1 = { id: 1, price: 100, isUnique: false };
        const item2 = { id: 2, price: 200, isUnique: false };
        cart.addItem(item1);
        cart.addItem(item2);
        cart.removeItems(1);
        expect(cart.getItems()).not.toContainEqual({ id: 1, price: 100 });
    });

    it('возвращает общую стоимость товаров в корзине', () => {
        const item1 = { id: 1, price: 100, isUnique: false };
        const item2 = { id: 2, price: 200, isUnique: false };
        cart.addItem(item1);
        cart.addItem(item2);
        expect(cart.getTotalPrice()).toBe(300);
    });

    it('возвращает общую стоимость товаров в корзине с учётом скидки', () => {
        const item1 = { id: 1, price: 100, isUnique: false };
        const item2 = { id: 2, price: 200, isUnique: false };
        cart.addItem(item1);
        cart.addItem(item2);
        expect(cart.getTotalPriceWithDiscount(10)).toBe(270);
    });
});