const graphql = require('graphql')

const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList} = graphql

const Products = require('./models/products')
const Users = require('./models/users')
const Reviews = require('./models/review')
const Feature = require('./models/feature')



const ProductType = new GraphQLObjectType({
    name:"Product",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        price:{type:GraphQLInt},
        brand:{type:GraphQLString},
        body:{type:GraphQLString},
        limit:{type:GraphQLInt},
        review:{
            type:new GraphQLList(ReviewType),
            resolve(parent,args){
                return Reviews.find({productId:parent.id})
            }
        },
        feature:{
            type:new GraphQLList(FeatureType),
            resolve(parent,args){
                return Feature.find({productId:parent.id})
            }
        }
    }),
})

const ReviewType = new GraphQLObjectType({
    name:"Review",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        rating:{type:GraphQLInt},
        text:{type:GraphQLString},
        product:{
            type:ProductType,
            resolve(parent,args){
                return Products.findById(parent.productId)
            }
        }
    })
})
const FeatureType = new GraphQLObjectType({
    name:"Feature",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        value:{type:GraphQLString},
        product:{
            type:ProductType,
            resolve(parent,args){
                return Products.findById(parent.productId)
            }
        }
    })
})

const UserType = new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        surname:{type:GraphQLString},
    }),
})

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addProduct:{
            type:ProductType,
            args:{
                name:{type:GraphQLString},
                price:{type:GraphQLInt},
                body:{type:GraphQLString}
            },
            resolve(parent,args){
                const product = new Products({
                    name:args.name,
                    price:args.price,
                    body:args.body,
                })
                return product.save()
            }
        },
        addUser:{
            type:UserType,
            args:{
                name:{type:GraphQLString},
                surname:{type:GraphQLString},
            },
            resolve(parent,args){
                const user = new Users({
                    name:args.name,
                    surname:args.surname,
                })
                return user.save()
            }
        },
        deleteProduct:{
            type:ProductType,
            args:{
                id:{type:GraphQLID}
            },
            resolve(parent,args){
                return Products.findByIdAndRemove(args.id)
            }
        },
        updateProduct:{
            type:ProductType,
            args:{
                id:{type:GraphQLID},
                name:{type:GraphQLString},
                price:{type:GraphQLInt},
                body:{type:GraphQLString}
            },
            resolve(parent,args){
                return Products.findByIdAndUpdate(
                    args.id,
                    {$set:{name:args.name,price:args.price,body:args.body}},
                    {new:true}
                )
            }
        },
    }
})


const Query = new GraphQLObjectType({
    name:"Query",
    fields: {
        product: {
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Products.findById(args.id)
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Users.findById(args.id)
            }
        },
        products:{
            type:new GraphQLList(ProductType),
            args:{
                limit:{type:GraphQLInt},
                name:{type:GraphQLString},
            },
            resolve(parent,args){
                return Products.find({}).limit(args.limit)
            }
        },
        reviews:{
            type:new GraphQLList(ReviewType),
            resolve(parent,args){
                return Reviews.find({})
            }
        },
        features:{
            type:new GraphQLList(FeatureType),
            resolve(parent,args){
                return Feature.find({})
            }
        },
        users:{
            type:new GraphQLList(UserType),
            resolve(parent,args){
                return Users.find({})
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query:Query,
    mutation:Mutation,
})





