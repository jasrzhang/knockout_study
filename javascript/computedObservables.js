var ViewModalInput = function () {
  var self = this;

  // Observables for first and last names
  self.firstName = ko.observable("John");
  self.lastName = ko.observable("Doe");

  // Computed observable for full name
  self.fullName = ko.computed(function () {
    return self.firstName() + " " + self.lastName();
  });

  // Observable for the input string (ingredients)
  self.inputString = ko.observable(
    "Fish, Wheat Flour ( Gluten ), Shortening, Yeast, Sugar, Salt Bread Improver (corn starch, flour treatment agents (170, 516, 300, 1100))"
  );

  var allergenList = ["Fish", "Wheat", "Gluten", "Pine nut", "Brazil nut"];

  // Computed observable to highlight allergens in inputString
  self.highlightedString = ko.computed(function () {
    var input = self.inputString(); // Get the current value of inputString
    allergenList.forEach(function (item) {
      var regex = new RegExp(`\\b${item}(es|s)?\\b`, "gi"); // Case-insensitive matching
      input = input.replace(regex, function (matched) {
        return `<strong>${matched}</strong>`;
      });
    });
    return input; // Return the processed string with allergens highlighted
  });
};

// Apply Knockout bindings
ko.applyBindings(new ViewModalInput());
