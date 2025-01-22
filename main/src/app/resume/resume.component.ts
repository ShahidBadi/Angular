// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-resume',
//   imports: [FormsModule],
//   templateUrl: './resume.component.html',
//   styleUrl: './resume.component.css'
// })
// export class ResumeComponent {
//   name:any=""
//   enroll:any=""
//   city:any=""
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-resume',
  imports: [FormsModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  fname = "";
  mname = "";
  lname = "";
  dob = "";
  address = "";
  Phone = "";
  strength = "";
  weakness = "";
  Uni = "";
  qualification = "";
  achievements = "";
  certifications = "";
  email = "";
  skills = "";
  photoUrl = "";

  downloadPDF() {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text(`${this.fname} ${this.mname} ${this.lname}`, 10, 20);
    doc.setFontSize(12);
    doc.text(`Date of Birth: ${this.dob}`, 10, 30);
    doc.text(`Email: ${this.email}`, 10, 40);
    doc.text(`Phone: ${this.Phone}`, 10, 50);
    doc.text(`Address: ${this.address}`, 10, 60);

    doc.text(`Professional Summary`, 10, 80);
    doc.text(`Strength: ${this.strength}`, 10, 90);
    doc.text(`Weakness: ${this.weakness}`, 10, 100);

    doc.text(`Experience: ${this.Uni}`, 10, 120);
    doc.text(`Education: ${this.qualification}`, 10, 130);
    doc.text(`Skills: ${this.skills}`, 10, 140);
    doc.text(`Certifications: ${this.certifications}`, 10, 150);
    doc.text(`Achievements: ${this.achievements}`, 10, 160);

    // Save the PDF
    doc.save(`${this.fname}_${this.lname}_Resume.pdf`);
  }
}
