## Bulletin Board
In this sample app for the testing tutorial we will test application functionality with QUnit, OPA5, and the mock server

## Entry points
Can be used to run the app or the automated tests as needed:

[mockServer.html](./webapp/test/mockServer.html) - start the app with mock data
[unit/unitTests.qunit.html](./webapp/test/unit/unitTests.qunit.html) - run all unit tests
integration/opaTests.qunit.html - run all integration tests
For more documentation please read the UI5 Developer Guide [Testing Tutorial section](https://sapui5.hana.ondemand.com/sdk/#/topic/291c9121e6044ab381e0b51716f97f52).

This entry page provides a list of entry points for the app so that you do not have to enter the URLs manually.

From this page you can open the app with mock data, run the unit tests, run the integration tests, or run the app’s test suite.
Note that in a productive scenario we would have an additional entry point that calls the app with a real service. At this stage we are working with mock data and don't have a real service for our prototype yet, so we have left this step out.