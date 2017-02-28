// Berekent de centimeters om naar inches.
exports.centimeterToInch = function(centimeter) {
	// Vermenigvuldigd alle centimeters met 0.393700787.
	var inch = (centimeter * 0.393700787);
	return inch;
}

// Berekend de  inches om naar centimeters.
exports.inchToCentimeter = function(inch) {
	// Vermenigvuldigd alle inches met 2.54.
	var centimeter = (inch * 2.54);
	return centimeter;
}

