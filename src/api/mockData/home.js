export default{
    getHomeData:()=>{
        return{
            code:200,
            data:{
                userinfo:[
                    {
                        username:'han',
                        todayBuy:500
                    },
                    {
                        username:'ming',
                        todayBuy:300
                    }
                ]
            }
        }
    }
}