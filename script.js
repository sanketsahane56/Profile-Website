// Contact Form Submit
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent successfully!');
  this.reset();
});

// AI Chatbot Demo (Placeholder)
document.getElementById('chat-btn').addEventListener('click', async () => {
  const input = document.getElementById('chat-input').value;
  const output = document.getElementById('chat-output');
  if (!input) return alert('Type something!');
  output.innerHTML = `You: ${input} <br> AI: This is a demo response.`;
  document.getElementById('chat-input').value = '';
});

// AI Image Generator Demo (Placeholder)
document.getElementById('img-btn').addEventListener('click', async () => {
  const prompt = document.getElementById('img-prompt').value;
  const output = document.getElementById('img-output');
  if (!prompt) return alert('Enter image description!');
  output.innerHTML = `<p>Generated image for "${prompt}" will appear here (demo).</p>`;
  document.getElementById('img-prompt').value = '';
});

const certUpload = document.getElementById('cert-upload');
const addCertBtn = document.getElementById('add-cert');
const certGrid = document.getElementById('cert-grid');

addCertBtn.addEventListener('click', () => {
  const files = certUpload.files;
  if (files.length === 0) return alert('Select certificate(s) to upload!');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const certCard = document.createElement('div');
    certCard.classList.add('cert-card');

    // Delete Button
    const delBtn = document.createElement('button');
    delBtn.textContent = '×';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', () => certCard.remove());
    certCard.appendChild(delBtn);

    if (file.type.startsWith('image/')) {
      // Image certificate
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      certCard.appendChild(img);
    } else if (file.type === "application/pdf") {
      // PDF certificate
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.target = "_blank";
      link.textContent = file.name;
      certCard.appendChild(link);
    }

    certGrid.appendChild(certCard);
  }

  certUpload.value = ''; // reset input
});
document.addEventListener("DOMContentLoaded", () => {

  // Subtle parallax background movement
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / 40;
    const y = e.clientY / 40;
    document.body.style.backgroundPosition = `${x}px ${y}px`;
  });

});
const wrapper = document.querySelector('.profile-image-wrapper');
const photo = document.querySelector('.profile-img');

if (wrapper && photo) {
  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    photo.style.transform = `
      translate(${x / 15}px, ${y / 15}px)
      rotateX(${-y / 25}deg)
      rotateY(${x / 25}deg)
    `;
  });

  wrapper.addEventListener('mouseleave', () => {
    photo.style.transform = '';
  });
}
document.querySelectorAll('.resume-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.boxShadow = '0 0 20px #00ffff';
  });
  box.addEventListener('mouseleave', () => {
    box.style.boxShadow = '';
  });
});
// AI Text Generator Demo
function generateAI() {
  const input = document.getElementById("aiInput").value;
  const output = document.getElementById("aiOutput");

  if (input === "") {
    output.innerText = "⚠ Please enter a prompt.";
    return;
  }

  output.innerText = "🤖 AI is thinking...";

  setTimeout(() => {
    output.innerText =
      "✨ AI Response: This is a simulated AI response for -> \"" +
      input +
      "\"";
  }, 1500);
}

// AI Image Prompt Demo
function generateImage() {
  const prompt = document.getElementById("imgPrompt").value;
  const result = document.getElementById("imgResult");

  if (prompt === "") {
    result.innerText = "⚠ Enter image prompt first.";
    return;
  }

  result.innerHTML = `
    🧠 AI Generated Concept<br>
    <span style="color:#aaa">"${prompt}"</span><br><br>
    🖼 Image coming soon...
  `;
}

// AI Typing Effect
const aiText = [
  "Analyzing data...",
  "Training neural networks...",
  "Optimizing deep learning models...",
  "AI Ready 🚀"
];

let index = 0;
let char = 0;
const typingElement = document.getElementById("aiTyping");

function typeAI() {
  if (char < aiText[index].length) {
    typingElement.innerHTML += aiText[index].charAt(char);
    char++;
    setTimeout(typeAI, 80);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      char = 0;
      index = (index + 1) % aiText.length;
      typeAI();
    }, 1500);
  }
}

typeAI();
const thinkingBox = document.getElementById("aiThinking");
const thinkingText = document.getElementById("thinkingText");
const resultBox = document.getElementById("aiResult");

function resetAI() {
  thinkingBox.style.display = "none";
  resultBox.style.display = "block";
}

/* ========= TEXT AI ========= */
function runTextAI() {
  const input = document.getElementById("aiTextInput").value.trim();

  if (!input) {
    alert("Please enter a text prompt");
    return;
  }

  resultBox.style.display = "none";
  thinkingBox.style.display = "block";
  thinkingText.innerText = "🤖 AI is thinking about your question...";

  setTimeout(() => {
    resetAI();
    resultBox.innerHTML = `
      <h3>✨ AI Text Result</h3>
      <p>
        AI response generated successfully for:<br>
        <strong>"${input}"</strong>
      </p>
      <p>
        This is a simulated intelligent answer showing AI thinking,
        logic processing and response generation.
      </p>
    `;
  }, 2000);
}

/* ========= IMAGE AI ========= */
function runImageAI() {
  const prompt = document.getElementById("aiImgInput").value.trim();

  if (!prompt) {
    alert("Please enter image description");
    return;
  }

  resultBox.style.display = "none";
  thinkingBox.style.display = "block";
  thinkingText.innerText = "🧠 AI is creating image concept...";

  setTimeout(() => {
    resetAI();
    resultBox.innerHTML = `
      <h3>🖼 AI Image Prompt Result</h3>
      <p><strong>Prompt:</strong> ${prompt}</p>
      <p>
        A high-quality AI generated image of <strong>${prompt}</strong>,
        ultra-realistic, cinematic lighting, 4K resolution,
        AI neural creativity style.
      </p>
    `;
  }, 2500);
}
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("🚀 Message sent successfully!");
  e.target.reset();
});
document.querySelectorAll(".platform-icons .icon").forEach(icon => {
  icon.addEventListener("mousemove", e => {
    const x = e.offsetX - icon.offsetWidth / 2;
    const y = e.offsetY - icon.offsetHeight / 2;
    icon.style.transform = `translate(${x / 10}px, ${y / 10}px) scale(1.2)`;
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "";
  });
});
const layers = document.querySelectorAll(".parallax");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 8;
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
const photos = document.querySelector(".about-photo");

photo.addEventListener("mousemove", (e) => {
  const rect = photo.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  photo.style.transform = `
    rotateX(${-y / 20}deg)
    rotateY(${x / 20}deg)
  `;
});

photo.addEventListener("mouseleave", () => {
  photo.style.transform = "rotateX(0) rotateY(0)";
});
function clearAllCommon() {
  // Clear all inputs & textareas
  document.querySelectorAll("input, textarea, select").forEach(el => {
    el.value = "";
  });

  // Clear resume preview text
  document.querySelectorAll(".resume span, .resume p, .resume li, .resume h1")
    .forEach(el => el.innerHTML = "");
}
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_sqxtsqt",     // 🔴 replace
    "YOUR_TEMPLATE_ID",    // 🔴 replace
    this
  ).then(() => {
    alert("✅ Message sent successfully!");
    this.reset();
  }, (error) => {
    alert("❌ Message failed to send");
    console.log(error);
  });
});

function runTextAI() {
  const input = document.getElementById("aiTextInput").value.trim();
  const thinking = document.getElementById("aiThinking");
  const result = document.getElementById("aiResult");

  if (input === "") {
    alert("Please enter some text");
    return;
  }

  // Show thinking animation
  thinking.style.display = "block";
  result.style.display = "none";

  // Fake AI delay
  setTimeout(() => {
    thinking.style.display = "none";

    result.innerHTML = `
      <h3>AI Response</h3>
      <p>${input}</p>
    `;

    result.style.display = "block";
  }, 1500);
}

