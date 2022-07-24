# BASIC 

### 1. How do you deal with flaky tests?
#### Flaky tests are test which fails randomly , sometime passes and sometime failes.This random behavior needs to be handled.
#### This behavior can be handled by following the approaches given below:
* Failing tests needs to be debugged and fixed immediately, if its occuring frequently
* Apply test retry functionality on randomly failing test cases.
*	Flaky tests can be grouped together which can be used to discover bug if there are any in other tests
* Test data used for testing needs to be analyzed and updated on timely manner
### 2. Let's suppose there is a test pipeline taking about 1 hour to finish, what would you do to decrease the time of it?
*  Test suite needs to be analyzed frequently and eliminate redundant test cases
*  Check the timeout values used in tests
*  Check the stability and performance of the environment on which the suite is executed
*  Flaky tests needs to be checked
*  Check and update tests which has longer execution time and needs optimization
*  Independant tests can be grouped and executed parallelly
### 3. Imagine you have the possibility to ask software engineers to develop tools for you that will increase your productivity as full-stack QA, please describe to them your requirements
#### I would ask for software engineer to develop a Automation tool which maintain quality of the product and also increases the productivity of QA engineer so  to do that my requirements would be :
#### Must have features:
* Tools should support web application automation by providing
 * Inbuilt functions to perform action on web application 
 * Should help in handling all kind of dynamic and static elements.
 * Should help in generating auto locators for all kind of web elements.

* Tool should support to automte APIs by providing
 * Inbuilt function to handle all the http method requests
 * Inbuilt function which generate request body by just passing test data
 * Inbuilt function to validate any type of response
 * Inbuilt function to handle all kind of authentication and authorization

* Tool should help in evaluting test coverage
* Tool should be flexible and easy to configure for crossbrowser and parrallel execution
* Tool should also able to identify flaky test and group them

#### Nice to have 
* Tool should help in mapping manual test cases with automation test cases and should be capable of automatically mark them with fall and fail status