import React from 'react'
import ProductList from "./ProductList"
import Header from "./Header"


class App extends React.Component {
  render() {

    return (
      <div className='container-fluid fixed-top fixed-bottom 
            px-0'>


            <Header />
            <ProductList />


      </div >
    )
  }
}


export default App;


















