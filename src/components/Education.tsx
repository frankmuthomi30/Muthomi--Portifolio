import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Diploma in Information Communication Technology",
      institution: "THE NYERI NATIONAL POLYTECHNIC",
      year: "2021 - 2023",
      description: "Focused on software development, networking, and system analysis. Graduated with Credit."
    },
    {
      degree: "Web Development Certificate",
      institution: "THE JITU",
      year: "January - March 2023",
      description: "Intensive web development training program covering modern web technologies and best practices."
    }
  ];

  const certifications = [
    "Responsive Web Design Developer Certification (freeCodeCamp.org)",
    "Cisco Certification - Computer Hardware",
    "Introduction to IoT - Cisco Networking Academy"
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Education & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution} | {edu.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

