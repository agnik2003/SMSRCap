const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  year: { type: String, required: true }
});

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  
  // Custom validation ensuring up to 3 objects max
  education: {
    type: [educationSchema],
    validate: [arrayLimit, '{PATH} exceeds the limit of 3 education profiles.']
  },
  
  workExperience: { type: String, required: true },
  resumeLink: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true, enum: [true] }
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 3;
}

module.exports = mongoose.model('Application', applicationSchema);