//Sepetle ilgili action'ların tutulduğu yer.
export const ADD_TO_CART = "ADD_TO_CART" //string olarak ADD-TO-CART yazmak yerine sabit olarak tanımladık böylece yazım hatalarının önüne geçiyoruz.
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){
    return {
        //type : "ADD_TO_CART", //Action'a ADD-TO-CART şeklinde isim verdik.
        type : ADD_TO_CART, 
        //Reducer'lar içerisinde de ADD-TO-Cart şeklinde kullanmamız lazım.
        payload : product //payload: action ile beraber state'i etkileyecek olan veri.
    }
}

export function removeFromCart(product){
    return {
        type : REMOVE_FROM_CART,
        payload : product 
    }
}