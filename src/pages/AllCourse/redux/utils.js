

// export const filterCourse = (products, params) => {    
//     const testValue = new Set(params)   
//     if (products.length) {        
//         let array = products.filter(product => {            
//             if (testValue.has(product.category)) {
//                 console.log(true,product.category)
//                 return true
//             }
//             return false
//         }) 
//         console.log(array, 'test')
//         console.log(products, 'test products')
//         return array
//     }

// }

export const filterCourse = (products, params) => {
    console.log('test params', params, products)
    const testValue = new Set([...params])
    console.log('test value', testValue)
    let addArray = []
    if (params.size) {
        products.forEach(product => {
            const values = Object.values(product)
            for (let val of values) {
                if (testValue.has(val)) {
                    if (!addArray.includes(product))
                        addArray.push(product)
                }
            }
        });
        // var array = products.filter(product => {
        //     const values = Object.values(product)
        //     for( const val of values ){
        //         testValue.has(val)
        //     }
        // }
        // )
        console.log('test array', addArray)
        return addArray
    }
    // console.log(products, "test array1")
    return products
}