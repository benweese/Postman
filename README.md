# BenWeese.Dev
- [Home](https://benweese.dev)
- [Java Automation](https://benweese.dev/Java_Automation/)
- [Java Automation Template](https://benweese.dev/Java_Automation_Template/)
- [BenWeese.com](https://benweese.com)
- [Websites](http://benweese.dev/Websites/)
- [Synology NAS](https://benweese.dev/Synology-NAS/)

## Postman
This project is for testing APIs for practice. You can check out the [wiki](https://github.com/benweese/Postman/wiki) for more information and learning.

## Motivation
To work on my API testing skills.

## Build status
[![CircleCI](https://circleci.com/gh/benweese/Postman/tree/master.svg?style=shield)](https://circleci.com/gh/benweese/Postman/tree/master) ![GitHub](https://img.shields.io/github/license/benweese/Postman.svg) ![GitHub issues](https://img.shields.io/github/issues-raw/benweese/Postman.svg) 

## Tools Used
<b>News API</b>
- [NewsAPI.org](https://newsapi.org/)

<b>SWAPI</b>
- [SWAPI GraphQL](https://swapi.apis.guru/)
- [How to use Postman and GraphQL](https://www.codetraveler.io/2019/01/12/how-to-use-postman-with-a-graphql-api/)

<b>Continuous Intergration</b>
- [CircleCI](https://circleci.com/)

<b>Postman CLI</b>
- [Newman](https://hub.docker.com/r/postman/newman/)

<b>Json Lint</b>
- [Json Lint](https://jsonlint.com/)

<b>Downloads</b>
- [Postman](https://www.getpostman.com/apps)

## Features
With API testing our Circle-CI runner will use Newman to run postman collections in Command line.

## Code Example

<b>Postman Json API test</b>
```
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
```

## Documentation
- [All Things Postman](https://github.com/DannyDainton/All-Things-Postman/)
- [Postman Testing](https://learning.getpostman.com/docs/postman/scripts/test_scripts/)
- [API testing tips from a Postman professional](https://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)
- [GraphQL support in Postman available for early access on canary channel](https://community.getpostman.com/t/graphql-support-in-postman-available-for-early-access-on-canary-channel/5524/3)

## Credits
[Ben Weese](https://benweese.dev/)
