Feature: End to end Ecommerce validation

    aplication regression

    Scenario: Ecommerce product delivery
        Given I open Ecommerce page
        When I add two products to the cart
        And I validate the total price
        Then select the country submit and verify Thank you message 