export default class Cart {
    private items: { id: number, price: number, count: number, isUnique: boolean }[];

    constructor() {
        this.items = [];
    }

    addItem(item: { id: number, price: number, isUnique: boolean }): void {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem && existingItem.isUnique) {
            return;
        }
        if (existingItem) {
            existingItem.count++;
        } else {
            this.items.push({ ...item, count: 1 });
        }
    }

    decreaseItemCount(id: number): void {
        const item = this.items.find(i => i.id === id);
        if (item && item.count > 1) {
            item.count--;;
        } else if (item && item.count === 1) {
            this.items = this.items.filter(i => i.id !== id);
        }
    }

    getItems(): { id: number, price: number }[] {
        return this.items;
    }

    removeItems(id: number): void {
        this.items = this.items.filter(item => item.id == id);
    }

    getTotalPrice(): number {
        return this.items.reduce((acc, item) => acc + item.price * item.count, 0);
    }

    getTotalPriceWithDiscount(discount: number): number {
        const totalPrice = this.getTotalPrice();
        return totalPrice - (totalPrice * discount / 100);
    }
}