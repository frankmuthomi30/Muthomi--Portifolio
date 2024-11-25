import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import local images
import softwareDevImage from "/jitu.png";
import responsiveWebDesignImage from "/Screenshot freeCodeCamp.org.png";
import makeFoundationImage from "/ScreenshotMakeCertificate.png";
import iotImage from "/ScreenshotIntroduction_to_IoT_Badge.png";

export function Certifications() {
  const certifications = [
    {
      name: "Software Development Training",
      issuer: "THE JITU",
      date: "April 2023",
      description:
        "Successfully completed comprehensive software development training program, focusing on modern development practices and technologies.",
      image: softwareDevImage,
      badges: ["Web Development", "Modern Technologies", "Professional Training"],
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "July 22, 2023",
      description:
        "Successfully completed 300 hours of coursework covering modern responsive web design principles and practices, including HTML5, CSS3, and web accessibility standards.",
      image: responsiveWebDesignImage,
      verifyLink: "https://freecodecamp.org/certification/frankmuthomi30/responsive-web-design",
      badges: ["HTML5", "CSS3", "Responsive Design", "Web Accessibility"],
    },
    {
      name: "Make Foundation",
      issuer: "Make.com",
      date: "2023",
      description:
        "Certified in Make.com's foundational automation platform, demonstrating proficiency in creating efficient workflows and business process automation.",
      image: makeFoundationImage,
      badges: ["Workflow Automation", "Integration", "Business Process", "No-Code Development"],
    },
    {
      name: "Introduction to Internet of Things",
      issuer: "Cisco Networking Academy",
      date: "April 18, 2024",
      description:
        "Completed comprehensive training in IoT fundamentals, covering digital transformation, automation, AI integration, and intent-based networking.",
      image: iotImage,
      badges: ["IoT", "Digital Transformation", "Network Security", "AI Integration"],
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {cert.verifyLink && (
                    <Button variant="secondary" size="lg" asChild>
                      <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Verify Certificate <ExternalLinkIcon className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{cert.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    {cert.date}
                  </div>
                  <CardDescription className="text-lg font-medium">{cert.issuer}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-sm">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
