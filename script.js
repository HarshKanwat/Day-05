// The JSON data
let resume = {
  "basics": {
    "name": "HARSH",
    "email": "harsh@gamil.com",
    "phone": 9578746917
  },
  "work": [
    {
      "summary": "I am a student who is doing IT study"
    }
  ],
  "education": [
    {
      "institution": "DAV",
      "department": "ARTS",
      "studyType": "fulltime",
      "batch start year": 2015,
      "batch end year": 2019,
      "gpa": 7.5
    }
  ],
  "skills": [
    {
      "name": "javascript",
      "level": "beginner"
    }
  ],
  "languages": [
    {
      "language": "Tamil,English"
    }
  ]
};

// Using for loop to iterate over the education array
console.log("Using for loop:");
for (let i = 0; i < resume.education.length; i++) {
  console.log(resume.education[i]);
}

// Using for...in loop to iterate over the basics object
console.log("\nUsing for...in loop:");
for (let key in resume.basics) {
  if (resume.basics.hasOwnProperty(key)) {
    console.log(`${key}: ${resume.basics[key]}`);
  }
}

// Using for...of loop to iterate over the skills array
console.log("\nUsing for...of loop:");
for (let skill of resume.skills) {
  console.log(skill);
}

// Using forEach method to iterate over the languages array
console.log("\nUsing forEach method:");
resume.languages.forEach((language) => {
  console.log(language);
});