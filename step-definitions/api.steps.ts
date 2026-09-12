import { Given, When, Then } from "@cucumber/cucumber";


import { request, APIResponse,expect } from '@playwright/test';

let response: APIResponse;
let responseBody: any;
let apiContext: any;0


Given('user endpoint is {string}', async function (string) {
 
       apiContext = await request.newContext({
        baseURL: string,
        extraHTTPHeaders: {
            'x-api-key': 'a3d6c533-b634-4bea-8357-55ec36106ce6',
            'Content-Type': 'application/json'
        }
    });
  

});

When('User perform GET operation with path {string}',async function (string) {
 
response = await apiContext.get(string);

    responseBody = await response.json();

    console.log(responseBody);

    //await apiContext.dispose();

});

When('User perform delete operation with path {string}',async function (string) {
 
response = await apiContext.delete(string);

    responseBody = await response.json();

    console.log(responseBody);

    //await apiContext.dispose();

});


When('User perform POST operation with path {string} and request body with product details {string},{string},{string},{string},{string}',
    async function (
        path: string,
        name: string,
        year: string,
        price: string,
        cpuModel: string,
        hardDiskSize: string
    ) {

        const requestBody = {
            name: name,
            data: {
                year: Number(year),
                price: Number(price),
                "CPU model": cpuModel,
                "Hard disk size": hardDiskSize
            }
        };

        console.log('Request Body:');
        console.log(JSON.stringify(requestBody, null, 2));

        response = await apiContext.post(path, {
            data: requestBody
        });

        responseBody = await response.json();

        console.log('Response:');
        console.log(JSON.stringify(responseBody, null, 2));
    }
);

When('User perform PUT operation with path {string} and request body with product details {string},{string},{string},{string},{string}',
    async function (
        path: string,
        name: string,
        year: string,
        price: string,
        cpuModel: string,
        hardDiskSize: string
    ) {

        const requestBody = {
            name: name,
            data: {
                year: Number(year),
                price: Number(price),
                "CPU model": cpuModel,
                "Hard disk size": hardDiskSize
            }
        };

        console.log('Request Body:');
        console.log(JSON.stringify(requestBody, null, 2));

        response = await apiContext.put(path, {
            data: requestBody
        });

        responseBody = await response.json();

        console.log('Response:');
        console.log(JSON.stringify(responseBody, null, 2));
    }
);

When('User perform PATCH operation with path {string} and request body with product details {string}',
    async function (
        path: string,
        name: string  
       
    ) {

        const requestBody = {
            name: name
          
        };

        console.log('Request Body:');
        console.log(JSON.stringify(requestBody, null, 2));

        response = await apiContext.put(path, {
            data: requestBody
        });

        responseBody = await response.json();

        console.log('Response:');
        console.log(JSON.stringify(responseBody, null, 2));
    }
);

Then('User should receive valid HTTP response code {string}', function (string) {
 
     expect(response.status()).toBe(parseInt(string));
});



Then('user can validate collection name {string} and object count {string}', function (string, string2) {
    

          expect(responseBody[0]).toEqual({
            collectionName: string,
            objectCount: parseInt(string2)
        });

       
});

Then('user can validate product details', function () {
    

         expect(responseBody[0].id)
            .toBe('ff808181a067127101a0751a42f62504');

        expect(responseBody[0].name)
            .toBe('Apple');

        expect(responseBody[0].data.year)
            .toBe(2019);

        expect(responseBody[0].data.price)
            .toBe(1849.99);

        expect(responseBody[0].data['CPU model'])
            .toBe('Intel Core i9');

        expect(responseBody[0].data['Hard disk size'])
            .toBe('1 TB');
});

Then('user can validate product added successfully with name {string}, year {string}, price {string}, CPU model {string}, and hard disk size {string}',
    function (
        expectedName: string,
        expectedYear: string,
        expectedPrice: string,
        expectedCpuModel: string,
        expectedHardDiskSize: string
    ) {

        // Validate ID is generated
        expect(responseBody.id).toBeDefined();

        // Validate product details
        expect(responseBody.name).toBe(expectedName);

        expect(responseBody.data.year)
            .toBe(Number(expectedYear));

        expect(responseBody.data.price)
            .toBe(Number(expectedPrice));

        expect(responseBody.data['CPU model'])
            .toBe(expectedCpuModel);

        expect(responseBody.data['Hard disk size'])
            .toBe(expectedHardDiskSize);

        console.log('Product created successfully');
        console.log('ID:', responseBody.id);
        console.log('Name:', responseBody.name);
        console.log('Year:', responseBody.data.year);
        console.log('Price:', responseBody.data.price);
        console.log('CPU:', responseBody.data['CPU model']);
        console.log('Hard Disk:', responseBody.data['Hard disk size']);
    }
);

Then('user can validate product updated successfully with name {string}, year {string}, price {string}, CPU model {string}, and hard disk size {string}',
    function (
        expectedName: string,
        expectedYear: string,
        expectedPrice: string,
        expectedCpuModel: string,
        expectedHardDiskSize: string
    ) {

        // Validate ID is generated
        expect(responseBody.id).toBeDefined();

        // Validate product details
        expect(responseBody.name).toBe(expectedName);

        expect(responseBody.data.year)
            .toBe(Number(expectedYear));

        expect(responseBody.data.price)
            .toBe(Number(expectedPrice));

        expect(responseBody.data['CPU model'])
            .toBe(expectedCpuModel);

        expect(responseBody.data['Hard disk size'])
            .toBe(expectedHardDiskSize);

        console.log('Product created successfully');
       
        console.log('Name:', responseBody.name);
        console.log('Year:', responseBody.data.year);
        console.log('Price:', responseBody.data.price);
        console.log('CPU:', responseBody.data['CPU model']);
        console.log('Hard Disk:', responseBody.data['Hard disk size']);
    }
);



Then('user can validate product updated successfully with name {string}',
    function (
        expectedName: string
       
    ) {

        // Validate ID is generated
        expect(responseBody.id).toBeDefined();

        // Validate product details
        expect(responseBody.name).toBe(expectedName);

       
        console.log('Name:', responseBody.name);
        
    }
);


Then('user can validate delete msg',
    function (
        
       
    ) {

       

        // Validate product details
        expect(responseBody.message).toContain('has been deleted');

       
       
        
    }
);