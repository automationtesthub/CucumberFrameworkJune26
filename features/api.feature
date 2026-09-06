Feature: All API testing

 @api
  Scenario Outline: List all your collection info
    Given user endpoint is "https://api.restful-api.dev"
    When User perform GET operation with path "<path>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate collection name "<collectionName>" and object count "<objectCount>"
  Examples:  
  |path | statusCode | collectionName | objectCount |
  | /collections | 200 | products | 4 |

 @api
   Scenario Outline: List all objects in a collection
    Given user endpoint is "https://api.restful-api.dev"
    When User perform GET operation with path "<path>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate product details 
  Examples:  
  |path | statusCode |
  | /collections/products/objects | 200 |


   @api
   Scenario Outline: Add a new object to a collection
    Given user endpoint is "https://api.restful-api.dev"
    When User perform POST operation with path "<path>" and request body with product details "<name>","<year>","<price>","<CPU model>","<Hard disk size>"
    Then User should receive valid HTTP response code "<statusCode>"
    Then user can validate product added successfully with name "<name>", year "<year>", price "<price>", CPU model "<CPU model>", and hard disk size "<Hard disk size>"
  Examples:  
  |path | statusCode | name |year|price|CPU model|Hard disk size|
  | /collections/products/objects | 200 |Dell Inspiron 15|2023|75000|Intel Core i5|512GB|
  | /collections/products/objects | 200 |Lenovo ThinkPad|2026|68000|Intel Core i7|2 TB|

    
