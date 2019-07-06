# BenWeese.Dev
- [Home](https://benweese.dev)
- [Java Automation](https://benweese.dev/Java_Automation/)
- [Java Automation Template](https://benweese.dev/Java_Automation_Template/)
- [BenWeese.com](https://benweese.com)

## Postman
This project is for testing APIs for practice. You can check out the [Wiki](https://github.com/benweese/Postman/wiki) for more information and learning.

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
    pm.test("Response time is less than 200ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(200);
    });
    pm.test("Response must be valid and have a body", function() {
        pm.response.to.be.json; // this assertion checks if a body  exists
    });
    
    //We then create a function within commonTest for the Successful test we will run.
    var positive = () => {
            
        pm.test("Status code is 200", function () {
            pm.response.to.have.status(200);
        });
        pm.test("Response does not error", function() {
            pm.response.to.not.be.error;
            pm.response.to.not.have.jsonBody("error");
        });
        
    }
        //This is a function for the negative test, or the test we want to fail.
    var negative = () => {
        pm.test("Status code is 400", function () {
            pm.response.to.have.status(400);
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
- [Postman Quick Reference Guide](https://postman-quick-reference-guide.readthedocs.io/en/latest/index.html)
- [Postman Testing](https://learning.getpostman.com/docs/postman/scripts/test_scripts/)
- [API testing tips from a Postman professional](https://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)
- [GraphQL support in Postman available for early access on canary channel](https://community.getpostman.com/t/graphql-support-in-postman-available-for-early-access-on-canary-channel/5524/3)
- [Chai Assertion Library ](https://www.chaijs.com/api/bdd/)
- [Regex Cheat Sheet](https://www.rexegg.com/regex-quickstart.html)
- [Postman API Network](https://www.getpostman.com/api-network/)


## Credits
[Ben Weese](https://benweese.dev/)
