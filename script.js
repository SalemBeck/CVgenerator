document.getElementById("cvForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");
  
    // === Get form data ===
    const name = document.getElementById("nameinput").value;
    const title = document.getElementById("titleinput").value;
    const summary = document.getElementById("summaryinput").value;
    const birthdate = document.getElementById("birthdateinput").value;
    const email = document.getElementById("emailinput").value;
    const phone = document.getElementById("phoneinput").value;
    const country = document.getElementById("countryinput").value;
    const address = document.getElementById("addressinput").value;
    const education = document.getElementById("educationinput").value;
    const skillProf = document.getElementById("skillprofinput").value;
    const skillTech = document.getElementById("skilltechinput").value;
    const experience = document.getElementById("experienceinput").value;
  
    const ref1 = {
      name: document.getElementById("ref1name").value,
      company: document.getElementById("ref1company").value,
      phone: document.getElementById("ref1phone").value,
      email: document.getElementById("ref1email").value
    };
  
    const ref2 = {
      name: document.getElementById("ref2name").value,
      company: document.getElementById("ref2company").value,
      phone: document.getElementById("ref2phone").value,
      email: document.getElementById("ref2email").value
    };
  
    const photoFile = document.getElementById("photoInput").files[0];
  
    // === Draw Layout ===
    doc.setFillColor(40, 50, 80); // Dark sidebar
    doc.rect(0, 0, 65, 297, "F");
  
    const drawContent = (photoData) => {
      // Photo
      if (photoData) {
        doc.addImage(photoData, "JPEG", 20, 15, 25, 25);
      }
  
      // === LEFT COLUMN ===
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("CONTACT", 10, 50);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text([
        `Birth Date: ${birthdate}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Country: ${country}`,
        `Address: ${address}`
      ], 10, 57, { maxWidth: 50 });
  
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("EDUCATION", 10, 95);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(education, 10, 102, { maxWidth: 50 });
  
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("SKILLS", 10, 130);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("// Professional", 10, 137);
      doc.text(skillProf, 10, 143, { maxWidth: 50 });
      let skillsY = 143 + skillProf.split("\n").length * 5;
      doc.text("// Technical", 10, skillsY);
      doc.text(skillTech, 10, skillsY + 6, { maxWidth: 50 });
  
      // === RIGHT COLUMN ===
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.text(name.toUpperCase(), 75, 20);
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text(title, 75, 28);
  
      // Summary
      doc.setFontSize(10);
      doc.text(summary, 75, 38, { maxWidth: 120 });
  
      // Work Experience
      let y = 70;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("WORK EXPERIENCE", 75, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(experience, 75, y + 8, { maxWidth: 120 });
  
      // References
      y += 50;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("REFERENCES", 75, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(
        `${ref1.name} - ${ref1.company}\nPhone: ${ref1.phone}\nEmail: ${ref1.email}`,
        75, y + 8, { maxWidth: 60 }
      );
      doc.text(
        `${ref2.name} - ${ref2.company}\nPhone: ${ref2.phone}\nEmail: ${ref2.email}`,
        140, y + 8, { maxWidth: 60 }
      );
  
      doc.save("cv.pdf");
    };
  
    if (photoFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        drawContent(event.target.result);
      };
      reader.readAsDataURL(photoFile);
    } else {
      drawContent(null);
    }
  });
  