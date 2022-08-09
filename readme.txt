1) download the project
2) run command 'npm install'

3) To run the script to upload the given csv file into database
    1) open visual studio code
    2) select 'Upload Account Details' and run
    3) file will be imported in the collection 'useraccounts' (db: 'im')

// CRUD for 3 collections
4) To access an 'users' collection
    1) Insert api  
        uri:  http://localhost:3000/users
        method : post
        headers : Content-Type: application/json
        data (for example) : 
                {
                    "name" : "aaa", 
                    "userId" : 1    
                }
                *userId mandatory field (should be number)
    2) update api  
        uri:  http://localhost:3000/users/1
        method : put
        headers : Content-Type: application/json
        data (for example) : 
                {
                    age : 30 
                }
                *userId in uri
    3) delete api  
        uri:  http://localhost:3000/users/1
        method : delete
                *userId in uri
    4) get one api  
        uri:  http://localhost:3000/users/1
        method : get
                *userId in uri
    5) get all api  
        uri:  http://localhost:3000/users
        method : get
    
5) To access an 'accounts' collection
    1) Insert api  
        uri:  http://localhost:3000/accounts
        method : post
        headers : Content-Type: application/json
        data (for example) : 
                {
                    "name" : "xxx", 
                    "accountId" : 1    
                }
                *accountId mandatory field (should be number)
    2) update api  
        uri:  http://localhost:3000/accounts/1
        method : put
        headers : Content-Type: application/json
        data (for example) : 
                {
                    "type" : ccc
                }
                *accountId in uri
    3) delete api  
        uri:  http://localhost:3000/accounts/1
        method : delete
                *accountId in uri
    4) get one api  
        uri:  http://localhost:3000/accounts/1
        method : get
                *accountId in uri
    5) get all api  
        uri:  http://localhost:3000/accounts
        method : get

6) To access an 'policy' collection
    1) Insert api  
        uri:  http://localhost:3000/policy
        method : post
        headers : Content-Type: application/json
        data (for example) : 
                {
                    "name" : "xxx", 
                    "policyId" : 1    
                }
                *policyId mandatory field (should be number)
    2) update api  
        uri:  http://localhost:3000/policy/1
        method : put
        headers : Content-Type: application/json
        data (for example) : 
                {
                    "type" : ccc
                }
                *policyId in uri
    3) delete api  
        uri:  http://localhost:3000/policy/1
        method : delete
                *policyId in uri
    4) get one api  
        uri:  http://localhost:3000/policy/1
        method : get
                *policyId in uri
    5) get all api  
        uri:  http://localhost:3000/policy
        method : get

