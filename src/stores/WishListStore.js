import { defineStore } from 'pinia'
export const useWishListStore = defineStore('wishlist', {
    state: () => ({
        wishList: [],
      }),
    getters: {

    },
    actions:{
        addToWishList(id){
            this.wishList.push(id);
        }
    }
}
)