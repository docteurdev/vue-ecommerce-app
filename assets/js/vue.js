
const produits = [
    { id: 1, description: "Quarz Luxe", price: 12, img: 'assets/img/quarz-luxe.JPG'},
    { id: 2, description: 'Curren Business', price: 20, img: 'assets/img/curren-business.JPG'},
    { id: 3, description: 'Curren Sport', price: 5, img: 'assets/img/curren-sport.JPG'},
    { id: 4, description: 'Jaragar Racing', price: 8, img: 'assets/img/jaragar-racing.JPG'},
    { id: 5, description: 'Liges Hommes', price: 3, img: 'assets/img/liges-hommes.JPG'},
    { id: 6, description: 'Maserati Mechanical', price: 65, img: 'assets/img/maserati-mechanical.JPG'},
    { id: 7, description: 'Montre Mecanique', price: 25, img: 'assets/img/montre-mecanique.JPG'},
    { id: 8, description: 'Brand Designer', price: 28, img: 'assets/img/brand-designer.JPG'},
    { id: 9, description: 'Relogio Masculino', price: 4, img: 'assets/img/relogio-masculino.JPG'},
    { id: 10, description: 'Tissot Multifunction', price: 29, img: 'assets/img/tissot-multifunction.JPG'},
    { id: 11, description: 'Hip Hop Gold', price: 87, img: 'assets/img/hiphop-gold.JPG'},
    { id: 12, description: 'Mesh Genova', price: 6, img: 'assets/img/mesh-genova.JPG'},
  ];
  


const Home  = {
    template: "#Home",
    name: 'Home',
    data: () =>{
        return{
            produits,
            searchKey: '',
            liked: [],
            cart: [],
        }
    },
    computed:{
        productFilter(){
            return this.produits.filter((pdt) =>{
                return pdt.description.toLowerCase().includes(this.searchKey.toLowerCase())
            })
        },
        getCookies(){
            let cookiesValue = JSON.parse($cookies.get('like'))
            cookiesValue == null? this.liked =[] : this.liked = cookiesValue
        }
    },
    methods:{
        getLikeCookies (){
            setTimeout(() =>{
                return $cookies.set('like', JSON.stringify(this.liked))
            }, 300)
        },
        addToCart(produit){
               for(let i = 0; i < this.cart.length; i++){
                  if(this.cart[i].id === produit.id){
                      return this.cart[i].quantity++
                  }
                    this.cart.push({
                        id: produit.id,
                        description: produit.description,
                        price: produit.price,
                        img: produit.img,
                        quantity: 1
                    })
                
               }
        }
    },
    mounted: () =>{
        this.getCookies
    }
}

const userSettings  = {
    template: `<h1>userSettings</h1>`,
    name: 'usersettings'
}

const wishList  = {
    template: `<h1>wishList</h1>`,
    name: 'wishList'
}


const shoppingCart  = {
    template: `<h1>shoppingcart</h1>`,
    name: 'shoppingcart'
}


const routes = [
    {path:'/', component: Home},
    {path:'/user', component: userSettings},
    {path:'/wish', component: wishList},
    {path:'/cart', component: shoppingCart},
]

const router = new VueRouter({
    routes,
})


const vue = new Vue({
    router
}).$mount('#app ')