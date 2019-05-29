//Here we create a function that is then stored in the environmental variable. This is so we can then call this from any following test.
//This must be in the first test of the collection or collection folder.
postman.setEnvironmentVariable("commonTests", () => {
    //These are test that are ran on every call of the commonTest.
    tests["Response time is less than 500ms"] = responseTime < 500;
    tests['JSON array is not empty'] = (responseBody.length > 0);
    //We then create a function within commonTest for the Successful test we will run.
    var positive = () => {
        tests["Status code is 200"] = responseCode.code === 200;
        //Below is checking that the data has the correct schema. If we wanted to check correct data we could just add .and.is(data);
        const jsonData = pm.response.json();
        pm.test("Has correct schema", function() {
            pm.expect(jsonData.str).to.be.a("string");
            pm.expect(jsonData.numArray[0]).to.be.a("number");
            pm.expect(jsonData.numArray[0]).to.be.a("integer");
            pm.expect(jsonData.bool).to.be.a("boolean");
        });
    }
    //This is a function for the negative test, or the test we want to fail.
    var negative = () => {
        tests["Status code is 400"] = responseCode.code === 400;
        const jsonData = pm.response.json();
        pm.test("Has correct schema", function() {
            pm.expect(jsonData.error).to.be.a("string");
        });
    }
    //Lastly we return the functions, so we can call them from outside the environmental variable
    return {
        testType: {
            positive,
            negative
        }
    };
});

//for positive test
eval(environment.commonTests)().testType.positive();
 
//for negative test
eval(environment.commonTests)().testType.negative();
