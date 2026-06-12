const Application = require('../models/Application');
const nodemailer = require('nodemailer');

// Set up Nodemailer email transmitter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.submitApplication = async (req, res) => {
  try {
    const { name, email, phone, location, education, workExperience, resumeLink, termsAccepted } = req.body;

    // Check application constraints manually
    if (education && education.length > 3) {
      return res.status(400).json({ message: "You can provide up to 3 education details only." });
    }

    const newApplication = new Application({
      name, email, phone, location, education, workExperience, resumeLink, termsAccepted
    });
    await newApplication.save();

    // Map education records cleanly for email presentation
    const educationHTML = education.map((edu, idx) => `
      <li><strong>Entry #${idx + 1}:</strong> ${edu.degree} from ${edu.institution} (${edu.year})</li>
    `).join('');

    // EMAIL 1: Sent to your email address (agnik.m03@gmail.com)
    const adminMailOptions = {
      from: `"SM Resource Robot" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `⚡ New System Application: ${name}`,
      html: `
        <h2>New Candidate Application Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <h3>Education Profiles:</h3>
        <ul>${educationHTML}</ul>
        <p><strong>Work Experience:</strong> ${workExperience}</p>
        <p><strong>Resume Link:</strong> <a href="${resumeLink}" target="_blank">View Candidate Resume</a></p>
      `,
    };

    // EMAIL 2: Confirmation sent back to the applicant
    const applicantMailOptions = {
      from: `"SM Software Resource Group" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Application Received - SM Software Resource Group`,
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for submitting your application to SM Software Resource Group.</p>
        <p>Our operations team has received your application profiles and your resume link. We are reviewing your technical background and will reach out to schedule an interview if your qualifications align with our current needs.</p>
        <br />
        <p>Best Regards,</p>
        <p><strong>Talent Acquisition Matrix</strong><br>SM Software Resource Group</p>
      `,
    };

    // Fire off both email transactions asynchronously
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(applicantMailOptions);

    res.status(201).json({ success: true, message: "Application filed and tracked successfully." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};