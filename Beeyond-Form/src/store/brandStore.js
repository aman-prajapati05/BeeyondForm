import {create} from 'zustand';

const useBrandStore = create((set) => ({
  cname: '',
  setCname: (name) => set({ cname: name }),
}));

export default useBrandStore;

