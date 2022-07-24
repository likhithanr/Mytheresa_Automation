# Test Plan for Mytheresa Login feature

* Application compatibility : Web application,Android,iOS.
* Browser compatibility : Chrome,Firefox
* Module : Login feature
* Level of Testing : Unit test and integration
* Automation candidates : Unit and integration test cases.

### Unit Test cases
* Verify email, password and login fields are displayed in login form.
* Verify email, password and login fields are displaying the expected lables.
* Verify email and password fields are empty text fields
* Verify login button is clickable
* Validate field level error message when user enter more than expected length of character into email text field
* Validate field level error message when invalid formatted email id is entered into ‘Email’ field.
* Validate field level error message when user enter more than expected length of character into password text field
* Validate field level error message when invalid password is entered which is not matching required password criteria
* Validate on entering password it is masked and not in readable formatted
* Validate email and password fields are mandatory and each field displaying  * symbol
* Validate font,color and alligment of email ,password and login fields.
* Validate email, password and login fields alignment when user minimizes and maximizes the browser.

### Integration Test cases
#### Pre-requisites : Register user
* Validate error message when user click on Login button with valid email and invalid password.
* Validate error message when user clcik on Login button with unregistred email and valid password.
* Validate error message when user click on Login button with unregistered user credentials
* Validate succesfull login with registred email and password
* Change the password from backend and when user try to login with old password error message should be displayed
* Fill in email and password text field and click on browser refresh and ensure email and password fields got refreshed.
* Delete the user data from backend and when user try to login with deleted data it should give error message
* Validate browser console logs when user try to login and ensure there are no errors in console.
* Validate page load time when user click on login button with valid credentials
* Validate login page loading performance is same for 3G,4G and wifi networks.