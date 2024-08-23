var { graphql, buildSchema } = require("graphql")
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    helleo: String,
    hi: String
  }
`)
 
// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  helleo() {
    return 23
  },
  hi(){
    return "aadaaaddssedfsdc"
  }
}
 
// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: "{ helleo }",
  rootValue
}).then(response => {
  console.log(response)
})
graphql({
  schema,
  source: "{ hi }",
  rootValue
}).then(response => {
  console.log(response)
})