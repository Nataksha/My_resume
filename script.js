function downloadResume() {
    // Resume content as plain text
    const resumeContent = `
Nataksha Patyal
Web Developer | Software Engineer

ABOUT ME
I am a passionate web developer with experience in HTML, CSS, JavaScript, and modern web technologies.

LANGUAGES
- English – Professional Proficiency
- Hindi – Native / Fluent

SKILLS
- HTML5
- CSS3
- JavaScript
- Git & GitHub
- Responsive Web Design

PROJECTS
Smart India Hackathon (SIH) Project – Travel & Tourism
- Tourist destination information and travel guidance
- Interactive maps and location-based services
- User-friendly and responsive interface
- Focus on promoting local tourism and culture
- Technologies Used: HTML, CSS, JavaScript
- Role: Frontend Developer

EDUCATION
B.Tech – Computer Science and Engineering, Walchand College of Engineering, 2022–2026, CGPA: 9.2/10
Higher Secondary (12th) – State Board, 2022–2023, Percentage: 94%

CONTACT
Email: nataksha@email.com
GitHub: github.com/yourusername
`;

    // Create a "Blob" from the content
    const blob = new Blob([resumeContent], { type: 'text/plain' });

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Nataksha_Resume.txt'; // filename for downloaded file

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

