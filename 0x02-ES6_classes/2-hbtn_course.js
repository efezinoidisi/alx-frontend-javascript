export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}

	// retrieve attribute _name
	get name() {
		return this._name;
	}

	// set attribute _name and check type
	set name(value) {
		if (typeof value !== 'string') {
			throw new TypeError('name must be a string');
		} else {
			this._name = value;
		}
	}

	// set attribute _length and check type
	set length(value) {
		if (typeof value !== 'number') {
			throw new TypeError('length must be a number');
		} else {
			this._length = value;
		}
	}

	// getter function for attribute length
	get length() {
		return this._length;
	}

	// set attribute _students and confirm type to be an array of strings
	set students(value) {
		if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
			this._students = value;
		} else {
			throw new TypeError('array must be an array of strings');
		}
	}

	// getter function for attribute _students
	get students() {
		return this._students;
	}
}
