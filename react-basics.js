
    //     const div=
    //     <div>
    //         <button>Good Job</button>
    //         <p>
    //             Hello i'm Hims
    //         </p>
    //     </div>

    //     const div1=
    //     <div>
    //         <p>Cotton Socks</p>
    //         <p>Price:10$</p>
    //         <button>Add to Cart</button>
            
    //     </div>

    //     const productCost= 10+8*2;
    //     const shippingCost=5
    //     // console.log(productCost)
        
        
    //     // Load date 
    //     const date = dayjs().format('MMMM D YY')
    //     console.log(date)

    //     const div2=
    //     <div>
    //         <p>Product Cost: ${productCost}</p>
    //         <p>Shipping Cost: ${shippingCost}</p>
    //         <p>Total Cost: ${productCost + shippingCost}</p>
    //         <button>Place Your Order</button>
    //         <p><b>Today is {dayjs().format('MMMM D YYYY')} </b></p>
    //         <p>Current Time {dayjs().format('HH:mm:ss')}</p>
    //     </div>
    //     const paragraph = <p>Current time: {dayjs().format('HH:mm:ss')}</p>;



    //   const container = document.querySelector('.js-container');
    // //   ReactDOM.createRoot(container).render(div2)
    // const root = ReactDOM.createRoot(container);
    // root.render(paragraph)


    // setInterval(()=>{
    //     const paragraph = 
    //     <p>
    //         Current Time1 : {dayjs().format('HH:mm:ss')}
    //     </p>
    //     root.render(paragraph)
    // }, 1000)


    setInterval(()=>{
        const paragraph = 
        <p>
            Current Time1 : {dayjs().format('HH:mm:ss')}
        </p>
        root.render(paragraph)
    }, 1000)

   