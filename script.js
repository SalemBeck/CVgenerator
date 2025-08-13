
document.getElementById("cvForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    const name = document.getElementById("nameinput").value;
    const birthdate = document.getElementById("birthdateinput").value;
    const email = document.getElementById("emailinput").value;
    const phone = document.getElementById("phoneinput").value;
    const country = document.getElementById("countryinput").value;
    const address = document.getElementById("adressinput").value;
    const education = document.getElementById("educationinput").value;
    const experience = document.getElementById("experienceinput").value;
    const photoFile = document.getElementById("photoInput").files[0];
  
    // Add text
    doc.setFontSize(20);
    doc.text("Curriculum Vitae", 105, 15, null, null, "center");
  
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 30);
    doc.text(`Birth Date: ${birthdate}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Phone: ${phone}`, 20, 60);
    doc.text(`Country: ${country}`, 20, 70);
    doc.text(`Address: ${address}`, 20, 80);
    doc.text("Education:", 20, 90);
    doc.text(education, 20, 100);
    doc.text("Experience:", 20, 110);
    doc.text(experience, 20, 120, { maxWidth: 170 });
  
    // Add photo if available
    if (photoFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        doc.addImage(event.target.result, "JPEG", 150, 30, 40, 40);
        doc.save("cv.pdf");
      };
      reader.readAsDataURL(photoFile);
    } else {
      doc.save("cv.pdf");
    }
  });
  