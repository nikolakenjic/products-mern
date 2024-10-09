import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price) {
      return { status: 'fail', message: 'Please fill all the fields!' };
    }

    const res = await fetch('/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    set((state) => ({ products: [...state.products, data.data] }));

    return { status: 'success', message: 'Product created successfully' };
  },

  fetchProducts: async () => {
    const res = await fetch('/api/v1/products');
    const data = await res.json();

    set({ products: data.data });
  },

  deleteProduct: async (id) => {
    const res = await fetch(`/api/v1/products/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();

    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));
    return { status: 'success', message: 'Item Successfully deleted!' };
  },

  updateProduct: async (id, updateItem) => {
    const res = await fetch(`/api/v1/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateItem),
    });

    const data = await res.json();

    set((state) => ({
      products: state.products.map((product) =>
        product._id === id ? data.data : product
      ),
    }));

    return { status: 'success', message: 'Item Successfully updated!' };
  },
}));
