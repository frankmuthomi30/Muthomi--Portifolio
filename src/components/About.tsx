import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <div className="flex items-center gap-2 mb-8">
          <Terminal className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aspiring ICT professional skilled in software development and system management.
              Experienced in using technology to improve efficiency and create practical solutions.
              Eager to contribute technical skills to support innovation and growth in a dynamic work environment.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Web Development (HTML, CSS, JavaScript, React.js)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Data Communication and Networking
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Problem-Solving and Analytical Thinking
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  IT Support and Troubleshooting
                </li>

              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}