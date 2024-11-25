import { Card, CardContent } from "@/components/ui/card";
import { Code2, Award } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Skills() {
  const skills = [
    "JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS",
    "Git", "Data Entry", "Network Configuration", "IT Support",
     "Microsoft Office Suite", "Cisco Packet Tracer", "Windows OS",
    "AI-Assisted Web Development"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Technical Skills</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Skill Categories</h3>
            </div>
            
            <Accordion type="single" collapsible>
              <AccordionItem value="languages">
                <AccordionTrigger>Programming Languages</AccordionTrigger>
                <AccordionContent>
                  JavaScript,
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="web">
                <AccordionTrigger>Web Technologies</AccordionTrigger>
                <AccordionContent>
                  HTML5, CSS3, React.js, Tailwind CSS
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tools">
                <AccordionTrigger>Tools & Software</AccordionTrigger>
                <AccordionContent>
                  Git, AI-Assisted Web Development, Microsoft Office Suite, Cisco Packet Tracer
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="other">
                <AccordionTrigger>Other Skills</AccordionTrigger>
                <AccordionContent>
                 Network Configuration, Windows OS, IT Support
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

