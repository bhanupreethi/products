# products
Requirement : 
1. Create new db (products), add 3 random products details(name,price,desp)
2. Create two APIs get and post.

I have created collection 'products' in mongo.
API's are tested using POSTMAN.
Get API :
http://localhost:8083/getProd
Post API :
http://localhost:8083/postProd
Body : 
{
	"product" : "sugar",
	"price" : "70",
	"desp" : "Sugar is not good for health"
}


