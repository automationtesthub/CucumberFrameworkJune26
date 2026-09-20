Feature: All API testing

  @cl
  Scenario Outline: List all your collection info
    Given user endpoint is "https://api.restful-api.dev"
    When User perform GET operation with path "<path>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate collection name "<collectionName>" and object count "<objectCount>"
  Examples:  
  |path | statusCode | collectionName | objectCount |
  | /collections | 200 | products | 7 |


   Scenario Outline: List all objects in a collection
    Given user endpoint is "https://api.restful-api.dev"
    When User perform GET operation with path "<path>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate product details 
  Examples:  
  |path | statusCode |
  | /collections/products/objects | 200 |


  
   Scenario Outline: Add a new object to a collection
    Given user endpoint is "https://api.restful-api.dev"
    When User perform POST operation with path "<path>" and request body with product details "<name>","<year>","<price>","<CPU model>","<Hard disk size>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate product added successfully with name "<name>", year "<year>", price "<price>", CPU model "<CPU model>", and hard disk size "<Hard disk size>"
  Examples:  
  |path | statusCode | name |year|price|CPU model|Hard disk size|
  | /collections/products/objects | 200 |Dell Inspiron 15|2023|75000|Intel Core i5|512GB|
  | /collections/products/objects | 200 |Lenovo ThinkPad|2026|68000|Intel Core i7|2 TB|

    
  
   Scenario Outline: Update an object in a collection
    Given user endpoint is "https://api.restful-api.dev"
    When User perform PUT operation with path "<path>" and request body with product details "<name>","<year>","<price>","<CPU model>","<Hard disk size>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate product updated successfully with name "<name>", year "<year>", price "<price>", CPU model "<CPU model>", and hard disk size "<Hard disk size>"
  Examples:  
  |path | statusCode | name |year|price|CPU model|Hard disk size|
  | /collections/products/objects/ff808181a067127101a0756a698f256c | 200 |Dell Inspiron 16|2024|75000|Intel Core i7|512GB|
 

   Scenario Outline: Partially update an object in a collection
    Given user endpoint is "https://api.restful-api.dev"
    When User perform PATCH operation with path "<path>" and request body with product details "<name>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate product updated successfully with name "<name>"
  Examples:  
  |path | statusCode | name |
  | /collections/products/objects/ff808181a067127101a0756a698f256c | 200 |Dell Vastro 16|
 

  @api
   Scenario Outline: Delete an object from a collection
    Given user endpoint is "https://api.restful-api.dev"
    When User perform delete operation with path "<path>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate delete msg 
  Examples:  
  |path | statusCode |
  | /collections/products/objects/ff808181a067127101a0756a698f256c | 200 |