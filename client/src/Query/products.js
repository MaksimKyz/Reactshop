import { gql } from '@apollo/client'


export const GET_ALL_PRODUCTS = gql`
   query($limit:Int){
  products(limit:$limit){
       id,name,body,price
    }
  }
`

export const UPDATE_PRODUCT = gql`
    mutation($id:ID,$name:String,$price:Int,$body:String){
        updateProduct(id:$id, name:$name, price:$price, body:$body){
            name,price,body
        }
    }
`

export const ADD_PRODUCT = gql`

    mutation($name:String,$price:Int,$body:String){
        addProduct(name:$name, price:$price, body:$body){
            name,price,body
        }
    }

`

export const GET_PRODUCT = gql`
    query($id:ID){
  product(id:$id){
    id,
    name,
    price,
    brand,
    body,
    review{
      id,
      name,
      rating,
      text,
    },
    feature{
      id,
      name,
      value,
    }
  }
}
`